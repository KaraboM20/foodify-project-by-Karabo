import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as RecipeAPI from './recipe-api';

const.get('/api/recipes/search', async (req,res)=>{
  const searchTerm = req.query.searchTerm as string;
  const page = req.query.page as string
  const result = RecipeAPI.searchRecipes();
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
