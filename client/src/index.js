import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AddDoggo from './addDoggo.js';
import Archive from './components/archive';
import Header from './constants/header';
import About from './constants/about';
import registerServiceWorker from './registerServiceWorker';
import './style/output.css';

ReactDOM.render(
        <div>
            
            <Router>
                <div>
                    <Route path="*" component={Header} />
                    <Route exact path='/' component={App} />
                    <Route path='/add-doggo' component={AddDoggo} />
                    <Route path='/about' component={About} />
                    <Route path='/archive' component={Archive} />
                </div>
            </Router>
        </div>
    , document.getElementById('root'));
    registerServiceWorker();