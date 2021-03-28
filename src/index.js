import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/firebase-app";

firebase.initializeApp({
    apiKey: "AIzaSyBhrJmzErQpqNwwVDNMYY3ZYxQHsRlHOrI",
    authDomain: "covid-dashboard-bae0a.firebaseapp.com",
    projectId: "covid-dashboard-bae0a",
    storageBucket: "covid-dashboard-bae0a.appspot.com",
    messagingSenderId: "591089561124",
    appId: "1:591089561124:web:1c09bf234b41c382dff2b1",
    measurementId: "G-9YNVDF9743"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
