import React from 'react';
import './Header.css';
import logo from '../media/logotipodanetflix.png';


export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Netflix Logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src='https://i.redd.it/ty54wbejild91.jpg' alt="usuario" />
                </a>
            </div>
        </header >
    );
}