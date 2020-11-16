import React from 'react';
import Header from '../../components/Header';
import MovieCard from '../../components/Movie/MovieCard';
import './home.css';

const Home = () => {

  return (
    <div className="container-home">
      <Header />
      <MovieCard />
    </div>
  )
}

export default Home;