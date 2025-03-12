import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as RecipeAPI from './recipe-api';

const express = require('express');
const RecipeAPI = require('./RecipeAPI');

const router = express.Router();


router.get('/api/recipes/search', async (req,res)=> {
  const searchTerm = req.query.searchTerm;
  const page = parseInt(req.query.page, 10) || 1;
  const resul
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='body-project'>
    <App />
  </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
