import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { userWatchlistData, watchlistColumns } from '../../MockData';
import { DataGrid } from '@mui/x-data-grid';

function WatchList() {
  return (
    <Box
            sx={{backgroundColor: '#EDF6FF',
                boxShadow:20,
                borderRadius:'16px',
                display:'flex',
                flexWrap:'wrap',
                height:400,
                width:'30%',
                marginLeft:10,
                marginTop:10,
            }}>
              <Box 
                sx={{
                  width:'100%',
                  height: 70,
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  gap: '15px'
                  }}>
                    <RemoveRedEyeIcon />
                    <Typography variant='h5'>
                      Watchlist
                    </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%', 
                  height:300,
                  color: 'black'
                  }}>
                    <DataGrid 
                      rows={userWatchlistData}
                      columns={watchlistColumns}
                    />

              </Box>
        </Box>
  )
}

export default WatchList