import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComp from './MyComp';
import IncDec from './IncDec';
import ClassState from './ClassState';
import PropsDemo from './PropsDemo';
import Form from './Compoents/Form';
import PropsInput from './PropsInput';
import PropsExample from './PropsExample';

const tag= <h1>Hello React!!!</h1>
const message="Hiiiiii"

const data={
  name:"John",
  city:"Pune"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <PropsInput/>
    <PropsDemo/> */}
    <PropsExample/>
  </div>
  
  // <Form/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
