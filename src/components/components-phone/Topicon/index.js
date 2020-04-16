import React from 'react';
import './index.css';

const Battery =require('./Battery.png');
const Bluetooth =require('./Bluetooth.png');
const Mobil =require('./Mobile Signal.png');
const Wifi =require('./Wifi.png');

const Topicon = () =>{
   return(
       <div className='TopIcon'>
           <section className='S1'>
                <img className='mobil' src={Mobil} alt=""/>
                <img className='wifi' src={Wifi} alt=""/>
           </section>
           <section className='S1'>
                <img className='teeth' src={Bluetooth} alt=""/>
                <img className='blue' src={Battery} alt=""/>
           </section>
       </div>
   )
}

export default Topicon;