import React, {} from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Inicio from './components/Inicio/Inicio';
import Menu from './components/Menú/Menu';
import Nosotros from './components/Nosotros/Nosotros';
import Delivery from './components/Delivery/Delibery';
import Bolsa from './components/Bolsa/Bolsa';
import Detalles from './components/Detalles/Detalles'



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
          <Route path='Bolsa' element={< Bolsa />} />
          <Route path='Detalles' element={<Detalles />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;