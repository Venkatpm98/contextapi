import React from 'react';
import './App.css';
import Nav from './Nav';
import Movielist from './Movielist';
import Addmovie from './AddMovie';
import { MovieProvider } from './MovieContext';


function App() {
  
  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <Addmovie/>
      <Movielist/>
    </div>
    </MovieProvider>
  );
}

export default App;
