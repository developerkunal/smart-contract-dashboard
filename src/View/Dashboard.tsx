import React from 'react';
import Header from '../Controller/Header'
import DataCard from '../Controller/DataCard'
import WithdrawRoyality from '../Controller/WithdrawRoyality'

function Dashboard() {
  return (<>
    <Header />
    <DataCard />
    <WithdrawRoyality />
  </>
  );
}

export default Dashboard;
