import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mybutton from './components/button/Mybutton';
import StickyFooter from './components/footer/StickyFooter';
import MuiHeader from './components/header/MuiHeader';
import { MuiTypography } from './components/typography/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiHeader></MuiHeader>
      <div>
      
      <MuiTypography></MuiTypography>
      <Mybutton></Mybutton>
      </div>
      <StickyFooter></StickyFooter>
    </div>
  );
}

export default App;
