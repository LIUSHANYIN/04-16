import React from 'react'
import './index.css';


const Ln = require('./logoNetflixOriginal@2x.png');
const Na = require('./logo-narcos@2x.png');
const Re = require('./Description.png');
const play = require('./btn-play.png');
const lis = require('./btn-my-list.png');
const Introduce =() =>{
    return(
        <div className='intro'>
            
            <section className='description'>
                <img className='ln' src={Ln} alt=""/>
                <img className='na' src={Na} alt=""/>
                <img className='re' src={Re} alt=""/>
                <section className='bt'>
                    <button><img src={play} alt=""/><p>Play</p></button>
                    <button><img src={lis} alt=""/><p>My List</p></button>
                </section>
            </section>
        </div>
    )
}
export default Introduce;