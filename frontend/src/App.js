import React from 'react';
import Header from './Header';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

function App() {
  const Home = () => {
    return <h1>Olá, sou home</h1>
  }
  const Genres = () => {
    return <h1>Olá, sou Generos</h1>
  }
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genres' component={Genres} />
      </div>
    </Router>
  );
}

export default App;
