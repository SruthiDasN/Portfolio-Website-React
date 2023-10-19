import React, { useState } from 'react'
import './Education.css'
import mtech from '../../img/mtech.png'
import mba from '../../img/mba.png'
import btech from '../../img/btech.png'
import diploma from '../../img/diploma.png'
import college from '../../img/college.png'
import { useSpring, animated } from '@react-spring/web'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Sruthi_Das_N from './Sruthi_Das_N.pdf'


const Education = () => {

    const animate = useScrollAnimation(); 
    
    
    const springProps = useSpring({
        transform: animate ? 'rotate(360deg)' : 'rotate(0deg)',
        config: { duration: 3000 }, // Adjust the duration as needed
      });
    
   
  return (
    <div className="ed-wrapper" id='Education' >
        {/* left side */}
        <div className="e-left">
           <span className='heading'>My</span> 
           <span className='primaryText'>Education</span>
           <span className='secondaryText'>Education has been the cornerstone of my
                personal and professional development,<br /> 
                empowering me with the knowledge and skills to excel in my chosen field. <br />
                It has instilled a lifelong passion for learning and a commitment to <br />
                achieving excellence in every endeavor.
            </span> 

            <a href={Sruthi_Das_N} download>
              <button className='button s-button'>Download CV</button>
            </a>
            
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className='e-right' style={{left: '4rem'}}>
       
        <animated.div className="e-minCircle" style={{ ...springProps }}>
  <div className="e-secCircle">
    <img src={mtech} alt="mtech" />
    <div className="image-label">M.Tech</div>
  </div>
  <div className="e-secCircle">
    <img src={mba} alt="mba" />
    <div className="image-label">MBA</div>
  </div>
  <div className="e-secCircle">
    <img src={btech} alt="btech" />
    <div className="image-label">B.Tech</div>
  </div>
  <div className="e-secCircle">
    <img src={diploma} alt="diploma" />
    <div className="image-label">Diploma</div>
  </div>
  <div className="e-secCircle">
    <img src={college} alt="college" />
    
  </div>
</animated.div>

          
            
            {/* background circles */}
            <div className='e-backCircle blueCircle'></div>
            <div className='e-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Education