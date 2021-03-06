import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import MovieDelete from './pages/Movie/MovieDelete';
import MovieRegister from './pages/Movie/MovieRegister';
import MovieUpdate from './pages/Movie/MovieUpdate';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/login" component={ Login } />
                <Route path="/movies/:id" exact component={ Movie }/>
                <Route path="/movies/delete/:id" exact component={ MovieDelete }/>
                <Route path="/movies/update/:id" exact component={ MovieUpdate }/>
                <Route path="/dashboard/movies" exact component={ MovieRegister }/>
                <Route path="/dashboard" exact component={ Dashboard }/>
                <Route path="/register" exact component={ Register }/>
            </Switch>
        </BrowserRouter>
    );
}
