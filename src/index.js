import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import News from './components/news'
import Image from './components/image';
import Meta from './components/meta';
import Card from './components/card';
import '../src/main.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const App = function (){

    var name = "karan";

    return(
        <Router>
        <nav className="w-100 bg-dark shadow-sm d-flex justify-content-between p-3">
            <div className="d-inline">
                <Link to="/news" className="btn btn-outline-danger font-weight-bold mx-1">News</Link>
                <Link to="/meta" className="btn btn-outline-danger font-weight-bold mx-1">Meta</Link>
            </div>
            <div>
                <Link to="/search" className="btn btn-danger font-weight-bold mx-1">Search</Link>
            </div>
        </nav>
        <div className="container">
        <Route
          exact
          path="/search/"
          component={() => <Search  />}
          />
        <Route
          exact
          path="/news/"
          component={() => <News  />}
        />
        <Route
          exact
          path="/meta/"
          component={() =>  <Meta title="Post 1" desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." time={4}/>}
        />
          
        </div>
        </Router>
    )
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
)