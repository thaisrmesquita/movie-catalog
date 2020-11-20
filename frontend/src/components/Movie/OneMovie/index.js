import React, { useState, useEffect, StyleSheet } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import './one-movie.css';

const OneMovie = (props) => {
    const [movie, setMovie] = useState([]);
    const id = props.match.params.id;

    useEffect(()=>{
        api.get(`movies/${id}`).then( response => {
            setMovie(response.data);
        })
    }, []);

    return (
        <div className="container">
            <h1 className="title-movie-one">{movie.title}</h1>
            
            <div className="container-img"><img className="img-movie-one" src={movie.folder_url} /></div>
            <div className="container-infos">
                <h2 className="info-movie"><b>Gênero:</b> {movie.genre}</h2>
                <h2 className="info-movie"><b>Atores Principais:</b> {movie.main_actors}</h2>
                <h2 className="info-movie"><b>Resumo:</b> {movie.summarized_plot}</h2>
                <h2 className="info-movie"><b>Trailler:</b> <a href={movie.youtube_trailer}>{movie.youtube_trailer}</a></h2>
            </div>
            <div className="wrapper">
                
            </div>
        </div>
        
    )
}
export default OneMovie;
