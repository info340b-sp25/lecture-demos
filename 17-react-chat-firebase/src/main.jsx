import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: PUT YOUR OWN CONFIG HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "fake_key",
  authDomain: "fake_domain",
  projectId: "fake_project",
  storageBucket: "fake_bucket",
  messagingSenderId: "fake_id",
  appId: "fake_app_id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);