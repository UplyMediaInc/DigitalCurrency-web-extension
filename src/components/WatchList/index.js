import { userWatchlistData } from '../../MockData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import React from 'react';


function WatchList() {
  return (
    <React.Fragment>
      <Title>
        Watchlist
      </Title>
      <Table>
        <TableHead>
          <TableRow>  
            <TableCell>Icon</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userWatchlistData.map((data) => {
            return(
              <TableRow key={data.id}>
                <TableCell>{<img alt='Coin' src={data.icon} height='30' width='30' />}</TableCell>
                <TableCell>{data.symbol}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
              </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default WatchList