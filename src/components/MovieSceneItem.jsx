
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
                
                <h3 className="movieTxt">{movie.movie}  </h3>
                <p className="movieTxt" >  {movie.fullLine}  </p>
                
                <span className="movieTxt" >{movie.year}  </span>
            </article>
        </>
    )


};

export default MovieSceneItem;