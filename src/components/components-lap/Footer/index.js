import React from 'react';
import './index.css';

const fa = require('./ic-facebook@2x.png');
const ins = require('./ic-instagram@2x.png');
const twi = require('./ic-twitter@2x.png');
const you = require('./ic-youtube@2x.png');

const Footer = ()=>{
    return(
        <div className='footer'>
            <section className='footer-icon'>
                <a href=""><img src={fa} alt=""/></a>
                <a href=""><img src={ins} alt=""/></a>
                <a href=""><img src={twi} alt=""/></a>
                <a href=""><img src={you} alt=""/></a>
            </section>

            <section className='footer-link'>
                <a href="">Audio et sous-titres</a>
                <a href="">Autodescription</a>
                <a href="">Centre d’aide</a>
                <a href="">Cartes cadeaux</a>
                <a href="">Presse</a>
                <a href="">Relations investisse</a>
                <a href="">Recrutement</a>
                <a href="">Conditions d’utilisa</a>
                <a href="">Confidentialité</a>
                <a href="">Informations légales</a>
                <a href="">Préférences de cooki</a>
                <a href="">Mentions légales</a>
                <a href="">Nous contacter</a>
            </section>

            <button>Service Code </button>
            <p>© 1997-2018 Netflix, Inc</p>

        </div>
    )
}
export default Footer;