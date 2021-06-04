import React,{useState,createContext} from 'react';

export const MovieContext=createContext();


export const MovieProvider =props=>{
    const[movies,setMovies]=useState([
        {
            name:'Harrypotter',
            price :'$10',
            id:23124
        },
        {
            name:'Game of thrones',
            price :'$20',
            id:24524
        },
        {
            name:'Inception',
            price :'$30',
            id:80906
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
   );
}
export default MovieContext;