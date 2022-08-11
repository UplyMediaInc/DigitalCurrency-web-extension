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
    class NewUser extends Moralis.User{
      constructor(attributes){
        super(attributes)
      }
    }
    Moralis.Object.registerSubclass("_User", NewUser);
    const newUser = new NewUser;
     const [username, setUsername] = React.useState("");
     const [taken, setTaken] = React.useState();
     const { fetch } = useMoralisCloudFunction("getUser", { username: username})
    
     React.useEffect(() => {
      setTaken(false);
     },[username])

     const createUser = async(e) => {
      e.preventDefault();
      if(username !== ""){
        const user = fetch({ onSuccess: (data) => {return data}})
        if(!user.length > 0){
          const newAccount = ethers.Wallet.createRandom();
          const ethAddress = newAccount.address;
          const recoveryPhrase = newAccount.mnemonic.phrase;
          console.log(recoveryPhrase);
          const encryptedJson = await newAccount.encrypt(recoveryPhrase);
          newUser.setUsername(username);
          newUser.setPassword(recoveryPhrase);
          newUser.signUp().then((user) => {
            user.set('recoveryPhrase', recoveryPhrase);
            user.set("ethAddress", ethAddress)
            user.set("encryptedJson", encryptedJson);
            return user.save();
          });
          console.log(username)
          //
          //
          //
          console.log('here')
          navigate("/recoveryphrase", {replace: true, state:{password: recoveryPhrase}})
        }else{
          setTaken(true);
          }
      }
    }
    const shuffle = (array) => {
      let currentIndex = array.length;
      let randomIndex;
  
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
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