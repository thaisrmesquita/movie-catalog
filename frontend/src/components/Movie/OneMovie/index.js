import React, { useState, useEffect, StyleSheet } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

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
            <h1>{movie.title}</h1>
            <img src={movie.folder_url} />
            <h2>Gênero: {movie.genre}</h2>
            <h2>Atores Principais: {movie.main_actors}</h2>
            <h2>Resumo: {movie.summarized_plot}</h2>
            <h2>Trailler: <a href={movie.youtube_trailer}>{movie.youtube_trailer}</a></h2>
        </div>
        
    )
}
export default OneMovie;
