import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Inicio from './components/Inicio/Inicio';
import Menu from './components/Menú/Menu';
import Nosotros from './components/Nosotros/Nosotros';
import Delivery from './components/Delivery/Delibery';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='Inicio' element={<Inicio />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='Nosotros' element={<Nosotros />} />
          <Route path='Delibery' element={< Delivery />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;