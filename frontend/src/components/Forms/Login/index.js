import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import './formLogin.css';
import api from '../../../services/api.js'

const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { email,password });
            localStorage.setItem('userId', response.data._id);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userEmail', response.data.email);
            history.push('/dashboard');
        } catch(err) {
            alert('Ops! Você ainda não é cadastrado no nosso sistema. Por favor, cadastre-se!');
        }
    }

    return(
        <div className="container">
            <div className="container-form-login">
                <Form className="form">
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" placeholder="E-mail"
                         value={ email }
                         onChange={ e=>setEmail(e.target.value) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Senha</Label>
                        <Input type="password" name="password" placeholder="Senha"
                        value={ password }
                        onChange={ e=>setPassword(e.target.value) } />
                    </FormGroup>
                    <FormGroup className="btn-form">
                        <Button onClick={ handleLogin }>Submit</Button>
                        <Link to="/register" className="link-register">Não tem conta? Registre-se</Link>
                    </FormGroup>
                   
                </Form>
            </div>
        </div>
    )

}

export default FormLogin;