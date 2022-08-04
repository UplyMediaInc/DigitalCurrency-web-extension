import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useMoralis } from 'react-moralis';
import { Navigate } from 'react-router-dom';

function ComingSoon() {
  const { isAuthenticated } = useMoralis()
  if(isAuthenticated){
    return <Navigate to="/" replace={true} />
  }
  return (
    <Container maxWidth='lg' sx={{width: '500px'}}>
        <Box
            sx={{ 
                flexGrow: 1, 
                height:'100%', 
                backgroundColor:(theme) => theme.palette.grey[100], 
              }}
        >
            <Typography component="h3" variant="h3">
                Coming Soon.  Our team is working on building the platform.
            </Typography>
            
              <Link to='/login'>
              {"To Login"}
              </Link>
        </Box>
    </Container>
  )
}

export default ComingSoon