import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header';
import { Link, useHistory } from 'react-router-dom';
import './movie-delete.css';

const MovieDelete = (props) => {
    const id = props.match.params.id;
    const [movie, setMovie] = useState([]);

    const history = useHistory();

    useEffect(()=>{
        api.get(`movies/${id}`).then( response => {
            setMovie(response.data);
        })
    }, []);

    function handleDelete() {
        api.delete(`movies/${id}`, {
            headers: {
                user_id: movie.user
            }
        }).then(response => {
            setMovie(response.data);
        })
        history.push('/dashboard');
    }
    function handleBack() {
        history.push('/dashboard');
    }

    return (
    <div>
        <Header />
        <div className="container-info-delete">
            <h1 className="info-delete-title">Você tem certeza que deseja apagar o filme {movie.title} da sua lista?</h1>
            <div className="container-btn-delete">
                <Link className="btn-delete" onClick={handleDelete}>Sim</Link>
                <Link className="btn-delete" onClick={handleBack}>Não</Link>
            </div>
        </div>
    </div>
    )
}

export default MovieDelete;