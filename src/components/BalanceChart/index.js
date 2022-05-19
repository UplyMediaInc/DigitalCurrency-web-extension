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
                alignItems:'center'
            }}
        >
            <Box 
                sx={{
                    height:'100%', 
                    width:'18%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent:'center', 
                }}>
                <Box
                    sx={{ width:'100%',fontSize: 'h5.fontSize'}}>
                    Account Value:
                </Box>
                <Box
                    sx={{ fontSize: 'h4.fontSize', width: '100%'}}>
                        ${mockData[mockData.length-1].value} USD
                </Box>
            </Box>
             <ResponsiveContainer width='80%' height='100%'>
                <LineChart 
                    data={mockData}
                    width={400}
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