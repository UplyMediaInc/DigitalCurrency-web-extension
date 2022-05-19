import React from 'react'
import { Typography } from '@mui/material';
import BalanceChart from '../../components/BalanceChart';
import Box from '@mui/material/Box';
import Holdings from '../../components/Holdings';
import WatchList from '../../components/WatchList';

function Dashboard() {
  return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <Box
          sx={{
            backgroundColor: '#437FC7',
            color: 'white',
            borderRadius: '16px',
            width:'25%',
            marginLeft: '20%',
            marginBottom:'2%',
            padding: '1.5%',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            boxShadow:20,
          }}>
          <Typography 
            variant='h3'
            align='center'>
              Wallet Dashboard
          </Typography>
        </Box>
        <BalanceChart/>
        <Holdings />
        <WatchList />
      </div>
  )
}

export default Dashboard;