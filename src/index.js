import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, About, Contact, History} from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//This is where React renders the App
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
      </Route> 
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
