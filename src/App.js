import React from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Topicon from './components/components-phone/Topicon';
import Logo from './components/components-phone/Logo';
import Preview from './components/components-phone/Preview';
import Navbar from './components/components-phone/Navbar';
import NavBar from './components/components-lap/NavBar';
import { useState } from 'react';
import Introduce from './components/components-lap/Introduce';
import List from './components/components-lap/List';
import MidIntro from './components/components-lap/MidIntro';
import List2 from './components/components-lap/List2';
import Footer from './components/components-lap/Footer';

function App() {
  const p1 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Preview_uhpwyc.png' ;
  const p2 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Preview_3_o95elx.png';
  const p3 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Preview_2_x8yjdq.png';
  const r1 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Watching_bky6zg.png';
  const r2 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Watching_3_zr9u4u.png';
  const r3 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1586985539/Watching_2_opu73d.png';
  const t1 = 'Preview';
  const t2 ='박준하 님이 시청 중인 콘텐츠';
  const t3 ='Netflix 인기 콘텐츠';
  const t4 ='Revoir';
  const t5 = 'Tendances actuelles';
  const t6 ='PROGRAMMES ORIGINAUX NETFLIX';
  const t7 ='Catégories';
  const n1 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1586994837/Rectangle_y3krxk.png';
  const n2 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1586994837/Rectangle_Copy_yontdb.png';
  const n3 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1586994837/Rectangle_Copy_2_pkqz2p.png';
  const l1 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587062546/1-01_2x_elnzad.png';
  const l2 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587062554/1-01_2x_m4vf8i.png';
  const l3 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587062561/2-01_2x_ovntih.png';
  const img1 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071024/3-02_2x_uydq18.png';
  const img2 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071024/3-01_2x_dqt7fq.png';
  const img3 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071023/3-05_2x_hrngcx.png';
  const img4 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071023/3-06_2x_lwdfad.png';
  const img5 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071024/3-07_2x_ib54hi.png';
  const img6 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587071024/3-04_2x_mscz76.png';
  const c1 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587071856/Thriller_joau46.png';
  const c2 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587071848/Drame_ire661.png';
  const c3 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071848/Action_bzogr8.png';
  const c4 ='https://res.cloudinary.com/dlapk94rx/image/upload/v1587071847/Com%C3%A9die_dh190q.png';
  const c5 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587071848/Sci-Fi_goxs9d.png';
  const c6 = 'https://res.cloudinary.com/dlapk94rx/image/upload/v1587071848/Romance_zvhbvj.png';


  const [isSidebarActive,setSidebar]= useState(false);
  const handleToggleSidebar =()=>{
    setSidebar(!isSidebarActive);
  }
  return (
   
    <div>
       <section className='container-phone'> 
          
        <Topicon/>
        <Logo/>
        <Preview name ={t1} p1={p1} p2={p2} p3={p3}/>
        <Preview name ={t2} p1={r1} p2={r2} p3={r3}/>
        <Preview name ={t3} p1={n1} p2={n2} p3={n3}/>
        <Navbar/>
        
       </section>

       <section className='container-laptop'>

        <NavBar isSidebarActive ={isSidebarActive} handleToggleSidebar ={handleToggleSidebar}/>
        <Introduce/>
        <List  Name={t4} l1={l1} l2 ={l2} l3={l3}/>
        <List  Name={t5} l1={l1} l2 ={l2} l3={l3}/>
        <MidIntro/>
        <List2 Name={t6}  img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} />
        <List2 Name={t7}  img1={c1} img2={c2} img3={c3} img4={c4} img5={c5} img6={c6} />
        <Footer/>
       </section>
    </div>

  )
}

export default App;
