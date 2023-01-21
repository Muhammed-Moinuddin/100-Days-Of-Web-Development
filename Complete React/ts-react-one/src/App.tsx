import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {
  const text = "Hello From Moin";
  const items = ["Moin", "Ayan", "Shahzaib"];
  return (
    <div className="App">
      <List data={items}/>
    </div>
  );
}

export default App;
