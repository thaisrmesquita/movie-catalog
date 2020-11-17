import React from 'react';
import Header from '../../components/Header';
import FormLogin from '../../components/Forms/Login';
import './login.css';

const Login = () => {
   return (
       <>
        <Header />
        <h2 className="title-login">Faça seu Login</h2>
        <FormLogin />
       </>
   ) 

}

export default Login;