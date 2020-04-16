import React from 'react';
import './index.css';


const List = ({Name,l1,l2,l3}) =>{

    return(
        <div className='List'>
            <h2>{Name}</h2>
            <section className='list'>
                <a href=""><img src={l1} alt=""/></a>
                <a href=""><img src={l2} alt=""/></a>
                <a href=""><img src={l3} alt=""/></a>
               
                <a href=""><img src={l1} alt=""/></a>
                <a href=""><img src={l2} alt=""/></a>
                <a href=""><img src={l3} alt=""/></a>
                <a href=""><img src={l1} alt=""/></a>
                <a href=""><img src={l2} alt=""/></a>
                <a href=""><img src={l3} alt=""/></a>
                <a href=""><img src={l1} alt=""/></a>
                
                
                
               
            </section>
        </div>
    )
}

export default List;