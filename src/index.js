import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Increment from './components/useeffect/useeffect';
import Functionsinglepost from './components/axios/Axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import CounterRedux from './components/Redux/CounterRedux';
import Add from './components/axios/Add';
import Formvalidation from './components/Formvalidation/Formvalidation';

ReactDOM.render(
  <React.StrictMode>
    <Header/> 
      <BrowserRouter>
      <Routes>
        <Route path="useeffect" element={<Increment />} />
        <Route path="axios" element={<Functionsinglepost />} />
        <Route path="Redux" element={<CounterRedux />} />
        <Route path="Add" element={<Add />} />Formvalidation
        <Route path="Formvalidation" element={<Formvalidation />} />
      </Routes>
  </BrowserRouter>  
  <Functionsinglepost />
  <Add />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
