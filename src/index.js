import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComp from './MyComp';
import IncDec from './IncDec';
import ClassState from './ClassState';

const tag= <h1>Hello React!!!</h1>
const message="Hiiiiii"

const data={
  name:"John",
  city:"Pune"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClassState/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
