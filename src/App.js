import React, { Component } from 'react';
import Filtros from './components/Filtros';
import Filmes from './components/Filmes';
import './styles.css';

const App = () => (
  <div className="App">
    <section>
      <Filtros />
      <Filmes />
    </section>
  </div>
);

export default App;
