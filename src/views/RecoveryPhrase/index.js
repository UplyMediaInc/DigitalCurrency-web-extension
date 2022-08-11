import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useMoralis } from 'react-moralis'
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/material'

function RecoveryPhrase() {
    const { Moralis } = useMoralis()
    const { state } = useLocation();
    const renderPhrase = () => {
        {console.log(Moralis.User.current())}
        const split = state.password.split(" ");
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
    
  return (
    <Container 
        component="main" 
        sx={{
            display:'flex',
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
    </Container>
  )
}

export default RecoveryPhrase
