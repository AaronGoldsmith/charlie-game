import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from "./components/MainContainer";

const App = () => <MainContainer />;
const app_wrapper = document.getElementById("app");

app_wrapper ? ReactDOM.render(<App />, app_wrapper): false;
