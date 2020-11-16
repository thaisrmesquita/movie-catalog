import React, { useState, useEffect, StyleSheet } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import './movieCard.css';

const MovieCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        api.get('movies').then(response => {
            setMovies(response.data);
        })
    }, []);
    return (
        <div className="container">
            <div className="list-movies">
                { movies.map(movie => { return (
                    <article key={movie.id} className="movie">
                        <strong>{movie.title}</strong>
                        <img src={movie.folder_url} />
                        <Link to='/'>Acessar</Link>
                    </article>
                )})}
            </div>
        </div>
        
    )
}
export default MovieCard;
