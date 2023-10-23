
import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.scss'
import '../styles/detail.scss'


/// recibe por parametros la lista y la renderiza


const MovieSceneDetail = ({ movie }) => {
    return (
        <>
            <section className="sectionDetail" >
            <article className="articleDetail">
                
                <img className="img"
                    src={movie.poster}
                    alt={movie.movie}
                    title={movie.movie} />
            
            <h3>{movie.movie}  </h3>
            <p>{movie.fullLine}  </p>
            <p>Director {movie.director} </p>
            
            <Link target="blank" to= {movie.audio}  >Escuchalo aquí </Link>
        </article>
            </section>
        </>
    )


};

export default MovieSceneDetail ;