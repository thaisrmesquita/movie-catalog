import React, { useEffect } from 'react';
import Header from '../../components/Header';
import OneMovie from '../../components/Movie/OneMovie';

const Movie = (props) => {

  return (
    <div className="container-home">
      <Header />
      <OneMovie{...props} />
    </div>
  )
}

export default Movie;