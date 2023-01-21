import React from 'react';
import './App.css';
import { useState } from 'react';
import AddForm from './components/addForm/addForm';
import List from './components/List/list';

function App() {
  // let texts = ["Moin", "Ayan", "Shahzaib"];
  let [items, setItems] = useState<string[]>(["Moin", "Ayan", "Shahzaib"]);

  const addItemHandler = (data: string) => {
    setItems([...items, data])
  }
  return (
    <div className="App">
      <AddForm addItem={addItemHandler}/>
      <List data={items}/>
    </div>
  );
}

export default App;
