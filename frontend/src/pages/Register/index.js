import React from 'react';
import Header from '../../components/Header';
import FormRegister from '../../components/Forms/Register';
import './register.css';

const Register = () => {
    return (
        <div>
            <Header />
            <h1 className="text-register">Faça seu Cadastro</h1>
            <FormRegister />
        </div>

    )
}

export default Register;