import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app';

import CreatePosts from './components/createPosts'
import NavBar from './components/navBar';


ReactDOM.render(
    <BrowserRouter >
    <App />
    </BrowserRouter>
    ,
    document.querySelector('.container')

);

