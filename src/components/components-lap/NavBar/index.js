import React from 'react';
import './index.css';

const logo = require('./logo-Netflix@2x.png');
const search = require('./ic-search@2x.png');
const bell = require('./ic-notification@2x.png');
const place = require('./placeholder-avatar@1x.png');
const down = require('./ic-dropdown.png');
const NavBar = ({isSidebarActive,handleToggleSidebar}) =>{
    return(
        <div  className='lap-nav'>
            <section className='nav-left'>
                <img className='logo' src={logo} alt=""/>
                <a className='a1' href="">Découverte</a>
                <a href="">Séries TV</a>
                <a href="">Films</a>
                <a href="">Programmes originaux</a>
                <a href="">Ajouts récents</a>
                <a href="">Ma liste</a>
            </section>
            <section className='nav-right'>
                <img src={search} alt=""/>
                <a href="">JEUNESSE</a>
                <img className='img2' src={bell} alt=""/>
                <button onClick={handleToggleSidebar}>
                    <img src={place} alt=""/>
                    <img className='img1' src={down} alt=""/>
                </button>
            </section>
            <section className={`${isSidebarActive ? 'active' :''} show`}>
                <section className='s1'>
                    <img src={place} alt=""/>
                    <p>shanyin</p>
                </section>
                <section className='s1'>
                    <img src={place} alt=""/>
                    <p>shanyin</p>
                </section>
                <a href="">Manage Profile</a>
                <hr/>
                <a href="">Account</a>
                <a href="">Help Center</a>
                <a href="">Sign out of Netflix</a>
            </section>
        </div>
    )
}

export default NavBar;