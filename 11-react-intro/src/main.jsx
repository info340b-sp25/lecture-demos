import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const my_name = "Kyle"

//React - element to show
const msgElem = (
    <div>
        <header>
            <h1 id='hello' className='myClass'>'Hello {my_name}!'</h1>
        </header>
        <footer>
            <p>Goodby {my_name}. This page is &copy; INFO 340</p>
        </footer>
    </div>
);



//Create a "React root" out of the `#root` elemment
//then render the React element at that root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msgElem)
  