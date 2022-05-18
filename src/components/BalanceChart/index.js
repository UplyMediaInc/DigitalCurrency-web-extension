import Box from '@mui/material/Box';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockData } from '../../MockData';

const BalanceChart = () => {
    return(
        <Box
            sx={{
                width: '75%',
                height: 500,
                backgroundColor: '#EDF6FF',
                marginLeft:'12%',
                boxShadow:20,
                borderRadius:'16px',
                display:'flex',
                justifyContent: 'center',
            }}
        >
            <Box 
                sx={{height:'100%', width:'15%', flexDirection: 'column', marginTop:10}}>
                <Box
                    sx={{alignSelf:'flex-start', width:'100%',fontSize: 'h5.fontSize'}}>
                    Account Value:
                </Box>
                <Box component='span'
                    sx={{ fontSize: 'h3.fontSize', alignSelf:'flex-start'}}>
                        ${mockData[mockData.length-1].value}
                </Box>
            </Box>
             <ResponsiveContainer width='80%'>
                <LineChart data={mockData}
                    margin={{ top: 20, bottom:20, right: 20}}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey='value' stroke='#000000'/>
                </LineChart>   
            </ResponsiveContainer> 
        </Box>
    )
}

export default BalanceChart;