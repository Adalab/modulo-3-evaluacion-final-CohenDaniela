
import React from "react";
import '../styles/App.scss'

/// recibe por parametros la lista y la renderiza


const MovieSceneItem = ({ movie }) => {
    return (
        <>
            <article className="article">
                
                    <img className="img"
                        src={movie.poster}
                        alt={movie.movie}
                        title={movie.movie} />
                
                <h3>{movie.movie}  </h3>
                <p>{movie.fullLine}  </p>
                <span>{movie.year}  </span>
            </article>
        </>
    )


};

export default MovieSceneItem;