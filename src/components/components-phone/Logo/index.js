import React from 'react';
import './index.css';

const net = require('./Netflix Logo.png');
const wifi = require('./Group 7.png');

const Logo = () =>{
    return(
        <div className='LOGO'>
            <img className='net' src={net} alt=""/>
            <img className='Wifi' src={wifi} alt=""/>
        </div>
    )
}

export default Logo;