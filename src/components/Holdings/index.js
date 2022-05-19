import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { userHoldingsData, columns } from '../../MockData';
import { DataGrid } from '@mui/x-data-grid';


const Holdings = () => {
    return(
        <Box
            sx={{backgroundColor: '#6DAFFE',
                boxShadow:20,
                borderRadius:'16px',
                display:'flex',
                flexWrap:'wrap',
                height:400,
                width:'50%',
                marginLeft:'12%',
                marginTop:10,
                alignContent:'center',
            }}>
                <Box sx={{marginLeft:5, marginTop:1, marginBottom:1}}>
                    <Typography variant='h6'>
                        Current Holdings:
                    </Typography>
                </Box>
                <Box 
                    sx={{
                    width:'100%', 
                    height:270, 
                    color:'#ffffff', 
                    display:'flex'}}>
                    <DataGrid 
                        rows={userHoldingsData}
                        columns={columns}
                        />
                        
                </Box>
        </Box>
    )
}

export default Holdings;