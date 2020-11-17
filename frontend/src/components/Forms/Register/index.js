import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import './formRegister.css';
import api from '../../../services/api.js'

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
        };
        try {
            const response = await api.post('users', data);
            alert("Cadastro realizado com sucesso.");
            history.push('/login');
        } catch (err) {
            alert(`Erro no cadastro! Tente novamente!`);
        }
    }

    return(
        <div className="container">
            <div className="container-form-register">
                <Form className="form">
                <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" name="name" placeholder="Nome"
                         value={ name }
                         onChange={ e=>setName(e.target.value) }/>
                    </FormGroup>
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
                        <Button onClick={ handleRegister }>Cadastrar</Button>
                        <Link to="/register" className="link-register">Não tem conta? Registre-se</Link>
                    </FormGroup>
                   
                </Form>
            </div>
        </div>
    )

}

export default FormRegister;