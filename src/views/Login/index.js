import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Navigate } from 'react-router-dom';
import { Link as NavLink } from 'react-router-dom';
import { useMoralis } from "react-moralis";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://uplymedia.com/">
          Uply Media Inc.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { authenticate, isAuthenticating, authError, isAuthenticated, Moralis} = useMoralis();

    const handleSubmit = async(e) => {
      e.preventDefault()
      await Moralis.User.logIn(username, password)
      .then((user) => {
        console.log(user)
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
    };
  return (
    <div>
      {isAuthenticated && (
        <Navigate to="/" replace={true}/>
      )}
        <Container component="main" maxWidth="xs" sx={{width: '500px'}} >
          <Box
            sx={{
              marginTop: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {isAuthenticating && <p>Authenticating</p>}
              {authError && <p>{JSON.stringify(authError.message)}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoFocus
                type='password'
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                    <Link component={NavLink} to='/register' variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

export default Login