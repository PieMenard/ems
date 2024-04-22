import { useState } from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <HeaderComponent />
      <ListEmployeeComponent />

      <FooterComponent/>
    </>
  );
}

export default App;
