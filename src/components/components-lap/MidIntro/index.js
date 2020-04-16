import React from 'react';
import './index.css';


const des = require('./Head.png');
const v1 = require('./Ida.png');
const v2 =require('./Ils aimaient la vie.png');
const v3 = require('./Cold War.png');

const MidIntro = () =>{
    return(
        <div className='mid'>
           
            <img className='des' src={des} alt=""/>
            <section className='v-list'>
                <a href="">
                    <img src={v1} alt=""/>
                    <p>L’âge d’or du cinéma</p>
                    
                </a>
                <a href="">
                    <img src={v2} alt=""/>
                    <p>L’âge d’or du cinéma</p>
                    
                </a>
                <a href="">
                    <img src={v3} alt=""/>
                    <p>L’âge d’or du cinéma</p>
                    
                </a>
                <a href="">
                    <img src={v1} alt=""/>
                    <p>L’âge d’or du cinéma</p>
                    
                </a>
                
            </section>
        </div>
    )
}

export default MidIntro;