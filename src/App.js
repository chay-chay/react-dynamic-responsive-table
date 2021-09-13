import './App.scss';
import React, { Fragment } from 'react';
import Header from './components/Header'
import Table from './components/Table'
import driversData from './driversData'
import tracksData from './tracksData'

const App = () => {
  // console.log(tracksData)
  return (
    <Fragment>
      <Header title='Dynamic &amp; Responsive Table Component' />
      <Table tableData={driversData} headingColumns={['#', 'Name', 'Team', 'Country', 'Date of birthday', 'Place of birth']} title='F1 Drivers 2020' />
      <Table 
      tableData={tracksData} 
      headingColumns={['Name', 'Country', 'Length(KM)', 'Number of laps']} 
      title='Top F1 tracks' 
      breakOn='small' />
      
    </Fragment>
  );
}

export default App;
