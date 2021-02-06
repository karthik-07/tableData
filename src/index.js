import React from 'react';
import ReactDOM from 'react-dom';
import Table from "./Table"
import New from "./New"
import Login from "./Login"

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link } from "react-router-dom";


ReactDOM.render(
    <Table />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
