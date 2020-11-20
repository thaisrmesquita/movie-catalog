import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import './personalCatalog.css';
import { Link } from 'react-router-dom';

const PersonalCatalogMovie = () => {
    
    const [movies, setMovies] = useState([]);
    const id = localStorage.getItem('userId');

    useEffect(()=> {
        api.get(`dashboard`, {
            headers: {
                user_id:id
            }
        }).then(response => {
            setMovies(response.data);
            console.log(movies);
        })
    }, [movies]);

    const handleDelete = (id) => {
        const idDoFilme = id;
        return console.log(idDoFilme);
    }

    return (
        <div className="container-personal-catalog">
            <div className="container-card">
                {movies.map(movie => (
                    <div className="card" key={movie._id}>
                        <span className="title-card">{movie.title}</span>
                        <img className="image-card" src={movie.folder_url} />
                        <span className="resume-card">{movie.summarized_plot}</span>
                        <div className="container-buttons">
                            <Link to={`/movies/${movie.id}`} className="button">Acessar</Link>
                            <Link to={`/movies/update/${movie.id}`} className="button">Atualizar</Link>
                            <Link to={`/movies/delete/${movie.id}`} onClick={ handleDelete(`${movie.id}`) } className="button">Deletar</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonalCatalogMovie;