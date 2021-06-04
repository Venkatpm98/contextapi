import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';
const Nav= (  ) => {
    const [movies,setMovies]=useContext(MovieContext);
    
    return(
  <div class="navbar">
      <h3>Venkat</h3>
      <p>List of Movies: {movies.length} </p>
      
</div>
    );
}

export default Nav;