import React from 'react'
import BalanceChart from '../../components/BalanceChart';
import Holdings from '../../components/Holdings';
import WatchList from '../../components/WatchList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <BalanceChart/>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'fit-content',
                    width:'fit-content',
                  }}
                >
                  <Holdings />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: 'fit-content',
                    width:'fit-content', }}>
                  <WatchList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
  )
}

export default Dashboard;