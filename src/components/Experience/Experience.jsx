import React from 'react'
import './Experience.css'
import Card from '../Card/Card'
import teacher from '../../img/teacher.png'
import it from '../../img/it.png'
import homemaker from '../../img/homemaker.png'
import Resume from './Resume.pdf'



const Experience = () => {
  
  return (
    <div className='e-wrapper' id='Experience'>
        {/* left side */}
        <div className="e-left">
           <span className='heading'>My</span> 
           <span className='primaryText'>Experiences</span>
           <span className='secondaryText'>Through my past experiences, 
            I've gained a wealth of knowledge and 
            skills that <br />
             contribute to my overall 
            capabilities.
            </span>
            <a href={Resume} download>
              <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="e-right">
          <div style={{left: '20rem'}}>
          
            <Card 
              icon = {teacher}
              heading = { 'Assistant Professor' }
              duration = {'MGMPTC | 2018 - 2022'}              
              detail = {'Taught computing Fundamentals | part of college website maintenance team.'}
            />
          </div>
          {/* second card */}
          <div style={{ top: '12rem', left:'-4rem'}}>
            <Card 
              icon = {it}
              heading = { 'Jr Process Consultant' }
              duration = {'SFO Technologies | 2016'}              
              detail = {'Data Gathering and Analysis | Documentation and Reporting | Cross-Functional Collaboration | Change Management Support'}
            />
          </div>
          {/* Third card */}
          <div style={{ top: '19rem', left:'16rem' }}>
            <Card 
              icon = {homemaker}
              heading = { 'Homemaker' }
              duration = {'Present'}              
              detail = {'Time Management | Organization | Multitasking | Budgeting and Financial Management | Childcare and Development | Emotional Intelligence | Self-Motivation'}
            />
          </div>
          <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Experience