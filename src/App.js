import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color="dark">
       <div className="container">
        <NavbarBrand href="/">VINAYAN</NavbarBrand>
       </div>
      </Navbar>

    </div>
  );
}

export default App;
