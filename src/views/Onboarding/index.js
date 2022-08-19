import { useMoralis, useMoralisCloudFunction } from 'react-moralis';
import * as React from 'react';
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Link as NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function Onboarding() {
    const navigate = useNavigate();
    const {Moralis} = useMoralis();
    const newUser = new Moralis.User();
     const [username, setUsername] = React.useState("");
     const [password, setPassword] = React.useState("")
     const [taken, setTaken] = React.useState();
     const { fetch } = useMoralisCloudFunction("getUser", { username: username})
    
     React.useEffect(() => {
      setTaken(false);
     },[username])

     const createUser = async(e) => {
      e.preventDefault();
      if(username !== "" && password !== ""){
        const user = fetch({ onSuccess: (data) => {return data}})
        if(!user.length > 0){
          const newAccount = ethers.Wallet.createRandom();
          const ethAddress = newAccount.address;
          const recoveryPhrase = newAccount.mnemonic.phrase;
          console.log(recoveryPhrase);
          const encryptedJson = await newAccount.encrypt(recoveryPhrase);
          newUser.setUsername(username);
          newUser.setPassword(password);
          newUser.signUp().then((user) => {
            user.set("ethAddress", ethAddress)
            user.set("encryptedJson", encryptedJson);
            return user.save();
          });
          console.log(username)
          console.log('here')
          navigate("/recoveryphrase", {replace: true, state:{phrase: recoveryPhrase}})
        }else{
          setTaken(true);
          }
      }
    }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Choose username
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 , width: 400}}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type='password'
                    name="password"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={createUser}
            >
              Create new wallet
            </Button >
            <Grid container justifyContent="center">
              <Grid item>
                <Link component={NavLink} to='/login' variant="body2">
                      {"Restore wallet with mnemonic phrase"}
              </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Onboarding