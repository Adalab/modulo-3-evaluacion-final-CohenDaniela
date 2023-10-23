import React from 'react';
import MovieSceneItem from './MovieSceneItem';
import '../styles/App.scss'

///pintar lista de peliculas
const  MovieSceneList= ({moviesList}) => {
    const renderMovies = moviesList.map((movie, index)=>{
        return(
            <li className='li'  key={index}>
               <MovieSceneItem movie={movie}  />
            </li>
        );
    });

    return(
        <>
        <ul className='list'>
            {renderMovies}
        </ul>
        </>
    )
}

export default MovieSceneList;