import React from 'react';
import './index.css';

const List2 = ({Name,img1,img2,img3,img4,img5,img6})=>{
    return(
        <div className='list2'>
            <h2>{Name}</h2>
            <section className='l2'>
                <a href=""><img src={img1} alt=""/></a>
                <a href=""><img src={img2} alt=""/></a>
                <a href=""><img src={img3} alt=""/></a>
                <a href=""><img src={img4} alt=""/></a>
                <a href=""><img src={img5} alt=""/></a>
                <a href=""><img src={img6} alt=""/></a>
                <a href=""><img src={img1} alt=""/></a>
                <a href=""><img src={img2} alt=""/></a>
                <a href=""><img src={img3} alt=""/></a>
            </section>
        </div>
    )
}

export default List2;