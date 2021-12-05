import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Habitacion from './components/habitacion';

const routing = (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habitacion" element={<Habitacion />} />
      </Routes>
    </BrowserRouter>
  </div>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
