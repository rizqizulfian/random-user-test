import React from 'react';
import Divider from './components/Divider';
import Header from './modules/Header/Header';
import Table from './modules/Table/Table';

const App = () => {
  return (
    <div className="m-8">
      <Header />
      <Divider />
      <Table />
    </div>
  );
}

export default App;
