import React from 'react';
import Header from '../../../components/Header';
import FormMovie from '../../../components/Forms/Movie';
import './movie-register.css';

const MovieRegister = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='title-text-register-new-movie'>Cadastrar novo Filme</h1>
                <FormMovie />
            </div>
        </div>
    )
}
export default MovieRegister;