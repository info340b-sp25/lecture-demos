import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloComponent from './components/Messages.jsx'

const headerText = "Hello!"

const imgSrc = "img/cookie.png";
const imgAlt = "a cookie";


function WeatherMessage(props) {
    return <p><em>It's so nice and sunny today, but a bit cold</em></p>;
}

function ImageComponent(props) {
    return <img src={imgSrc} alt={imgAlt}></img>;
}

function HeaderElem(props) {
    // this is my function body (and I'm not doing anything)
    return (<div>
        <HelloComponent message="Hello!" name="mara" hobby="line dancing"/>;
        <WeatherMessage/>;
        <ImageComponent/>;
    </div>);
}

const headerElem = <HeaderElem/>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headerElem);

// 1st layer: make a react component! Make a function,
// "call" that function with </>; (header, paragraphs, images
// em, strong, <whatever/>); maybe a footer

// 2nd layer: make a few components, compose them together!

// 3rd layer: move one component into another file, export & import
