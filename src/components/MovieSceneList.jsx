import React from 'react';
import { Link } from 'react-router-dom';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './movieSceneDetail';
import '../styles/App.scss'


///pintar lista de peliculas
const MovieSceneList = ({ moviesList }) => {
    const renderMovies = moviesList.map((movie) => {
        return (
            <Link to={'/scene/' + movie.id} >
                <li className='li' key={movie.id}>
                    <MovieSceneItem movie={movie} />
                </li>
            </Link>
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