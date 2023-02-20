import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Show from './pages/Show';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/> 
      <Route path="/:id" element = {<Show/>}/>
    </Routes>
  </BrowserRouter>
);

