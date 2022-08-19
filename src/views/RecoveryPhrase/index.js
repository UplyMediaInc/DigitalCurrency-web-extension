import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useMoralis } from 'react-moralis'
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function RecoveryPhrase() {
    const { Moralis, isAuthenticated, user } = useMoralis()
    const navigate = useNavigate()
    const { state } = useLocation();
    const renderPhrase = () => {
        const split = state.phrase.split(" ");
        return(
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {split.map((word, i) => {
                    return(
                        <Box key={i} sx={{display:'flex', margin: 1, alignItems:'baseline'}}>
                            <Typography variant='h4'>
                                {word} 
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        )
    }
    
    const handleContinue = () => {
        window.location.reload();
       // "navigate("/",{replace: true});"
    }
    useEffect(() => {
        console.log(user)
        Moralis.onAccountChanged((result) => {
            console.log(result)
        })
        console.log(isAuthenticated)
    }, [user])
  return (
    <Container 
        component="main" 
        sx={{
            display:'flex',
            width: '400px',
            flexWrap:'wrap', 
            justifyContent:'center',
            paddingBottom: '5%', 
            paddingTop: '5%'}} >
        <Paper elevation={4}>
            {renderPhrase()}
        </Paper>
        <Typography variant='body1' sx={{marginTop: '10px'}}>
            These 12 words make up the phrase used to access your wallet. Back it up on the cloud or back it up manually. Do not share this with anyone.
        </Typography>
        <Button 
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleContinue}
        >
            Continue
        </Button>
    </Container>
  )
}

export default RecoveryPhrase
