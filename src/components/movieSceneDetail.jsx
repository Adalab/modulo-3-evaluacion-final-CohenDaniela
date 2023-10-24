
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

                    <h3 className="infodetail" >{movie.movie}  </h3>
                    <p className="infodetail"  >{movie.fullLine}  </p>
                    <p className="infodetail"  >Director {movie.director} </p>

                    <Link className="audio" target="blank" to={movie.audio}  >Escuchalo aquí </Link>
                </article>
                <Link className="back" to="/" >
                    Volver al inicio
                </Link>
            </section>

        </>
    )


};

export default MovieSceneDetail;