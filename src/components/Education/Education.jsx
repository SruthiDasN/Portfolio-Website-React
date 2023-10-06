import React from 'react'
import './Education.css'
import mtech from '../../img/mtech.png'
import mba from '../../img/mba.png'
import btech from '../../img/btech.png'
import diploma from '../../img/diploma.png'
import college from '../../img/college.png'

const Education = () => {
  return (
    <div className="wrapper">
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
              <button className='button s-button'>Download CV</button>
            
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className='e-right' style={{left: '4rem'}}>
            <div className="e-minCircle">
                <div className="e-secCircle">
                    <img src={mtech} alt="mtech" />
                </div>
                <div className="e-secCircle">
                    <img src={mba} alt="mba" />
                </div>
                <div className="e-secCircle">
                    <img src={btech} alt="btech" />
                </div>
                <div className="e-secCircle">
                    <img src={diploma} alt="diploma" />
                </div>
                <div className="e-secCircle">
                    <img src={college} alt="college" />
                </div>
            </div>
            {/* background circles */}
            <div className='e-backCircle blueCircle'></div>
            <div className='e-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Education