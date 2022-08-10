import { useMoralis } from 'react-moralis';
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
    const mnemonicText = ["lobster","extra", "toddler", "front", "educate", "this", "mean", "fade",
     "weekend", "under", "tent", "below", "eager", "lonely", "brief", "dirt", "patient", "car"];
     const newUser = new Moralis.User();
     const [username, setUsername] = React.useState();
     const [taken, setTaken] = React.useState();

     React.useEffect(() => {
      setTaken(false);
     },[username])

     const createUser = async() => {
      const params = { username: username };
      const user = await Moralis.Cloud.run("getUser", params);
      if(username !== ""){
        if(!user.length > 0){
        const recoveryPhrase = shuffle(mnemonicText).join(" ");
        const newAccount = ethers.Wallet.fromMnemonic(recoveryPhrase);
        const ethAddress = newAccount.address;
        const encryptedJson = await newAccount.encrypt(recoveryPhrase);

        newUser.set('username', username);
        newUser.set('password', recoveryPhrase);
        newUser.set('recoveryPhrase', recoveryPhrase);
        newUser.set("ethAddress", ethAddress)
        newUser.set("encryptedJson", encryptedJson);
        nextPage();
      }else{
        setTaken(true);
        }
      }
    }
    const nextPage = () => {
      return navigate("/recoveryphrase", {replace: true})
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
                    onChange={(e) => setUsername(e)}
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={createUser}
            >
              Create new wallet
            </Button>
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