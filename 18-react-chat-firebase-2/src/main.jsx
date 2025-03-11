import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// TODO: Put your web app's firebase config here
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "fake_api_key",
  authDomain: "fake_domain",
  projectId: "fake_project_id",
  storageBucket: "fake_storage_bucket",
  messagingSenderId: "fake_messaging_id",
  appId: "fake_app_id"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);