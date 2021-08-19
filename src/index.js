import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAu9eczRjNRxaLS6tGkPydfvAHniFwUELk",
   authDomain: "apgchatapp.firebaseapp.com",
  projectId: "apgchatapp",
    storageBucket: "apgchatapp.appspot.com",
    messagingSenderId: "564302431532",
    appId: "1:564302431532:web:3cf8684506c70ae150d889",
    measurementId: "G-VQZXCNBCZ5"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
