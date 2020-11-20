import React from 'react';
import Header from '../../components/Header';
import PersonalCatalogMovie from '../../components/Movie/PersonalCatalogMovie';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const name = localStorage.getItem('userName');
    return (
        <div className="dashboard">
            <Header />
            
            <div className="container-btn-new-movie">
            <h1 className="text-main-dashboard">Seja bem-vindo ao seu catálogo, { name }</h1>
                <Link className="btn-new-movie" to='/dashboard/movies'>Adicionar Filme</Link>
            </div>
            <div className="dashboard-container">
                <PersonalCatalogMovie />
            </div>
        </div>
    )
}

export default Dashboard;
