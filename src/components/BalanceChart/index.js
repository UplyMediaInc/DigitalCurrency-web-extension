import * as React from 'react';
import Title from '../Title';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { mockData } from '../../MockData';

const BalanceChart = () => {
    const theme = useTheme();
    return(
        <React.Fragment>
            <Title>Account</Title>
             <ResponsiveContainer width='80%' height='70%'>
                <LineChart 
                    data={mockData}
                    width='100%'
                    margin={{ top: 20, bottom:0, right: 20, left:20}}>
                    <XAxis dataKey='name' stroke={theme.palette.text.secondary} style={theme.typography.body2} />
                    <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}/>
                    <Tooltip />
                    <Line isAnimationActive={false} dataKey='value' dot={false} stroke={theme.palette.primary.main}/>
                </LineChart>   
            </ResponsiveContainer> 
        </React.Fragment>
    )
}

export default BalanceChart;