import React from 'react';
import Header from '../../../components/Header';
import FormMovieUpdate from '../../../components/Forms/MovieUpdate';
import './movie-update.css';

const MovieUpdate = (props) => {
    return (
        <div>
            <Header />
            <div>
                <FormMovieUpdate {...props} />
            </div>
        </div>
    )
}
export default MovieUpdate;