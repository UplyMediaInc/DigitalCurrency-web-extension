import React from 'react'
import BalanceChart from '../../components/BalanceChart';
import Holdings from '../../components/Holdings';
import WatchList from '../../components/WatchList';

function Dashboard() {
  return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <BalanceChart/>
        <Holdings />
        <WatchList />
      </div>
  )
}

export default Dashboard;