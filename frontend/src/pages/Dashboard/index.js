import React from 'react';
import Header from '../../components/Header';

const Dashboard = () => {
    const name = localStorage.getItem('userName');
    return (
        <div>
            <Header />
    <h1>Seja bem-vindo { name }</h1>
        </div>
    )
}

export default Dashboard;
