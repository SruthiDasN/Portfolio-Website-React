import React from 'react'
import './Card.css';


const Card = ({ icon, heading, duration, detail }) => {
  return (
    <div className="c-wrapper">             
        <img src={icon} alt="" />
        <span>{heading}</span>       
        <span className='secondaryText'>{duration}</span>
        <span className='secondaryText'>{detail}</span>
        
    </div>
  )
}

export default Card