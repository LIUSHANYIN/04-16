import React from 'react';
import './index.css';

const home = require('./home.png');
const search = require('./search.png');
const download = require('./download.png');
const more = require('./more.png');

const Navbar = () =>{

    return(
        <div className='navbar'>
            <a href=""><img src={home} alt=""/></a>
            <a href=""><img src={search} alt=""/></a>
            <a href=""><img src={download} alt=""/></a>
            <a href=""><img src={more} alt=""/></a>
        </div>
    )
}
export default Navbar;
