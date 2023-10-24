import React from 'react';
import { Link } from 'react-router-dom';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './movieSceneDetail';
import '../styles/App.scss'


///pintar lista de peliculas
const MovieSceneList = ({ moviesList }) => {
    const renderMovies = moviesList.map((movie) => {
        return (
            
             <li className='li' key={movie.id}>
                <Link to={'/scene/' + movie.id} >
                <MovieSceneItem movie={movie} />
               </Link>
             
         </li>
        );
    });

    return (
        <>
            <ul className='list'>
                {renderMovies}
            </ul>
        </>
    );
};

export default MovieSceneList;