import * as React from 'react';
import { userHoldingsData } from '../../MockData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';


const Holdings = () => {
    return(
        <React.Fragment>
            <Title>Assets</Title>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Icon
                        </TableCell>
                        <TableCell>
                            Asset
                        </TableCell>
                        <TableCell>
                            Price
                        </TableCell>
                        <TableCell>
                            Balance
                        </TableCell>
                        <TableCell align='right'>
                            Value
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userHoldingsData.map((asset) => {
                        return (
                        <TableRow key={asset.id}>
                            <TableCell>{<img alt='Coin Icon' src={asset.icon} height='30' width='30'/>}</TableCell>
                            <TableCell>{asset.name}</TableCell>
                            <TableCell>{asset.symbol} Price</TableCell>
                            <TableCell>{asset.balance}</TableCell>
                            <TableCell align='right'>{asset.value}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default Holdings;