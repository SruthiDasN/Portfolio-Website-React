import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import sruthidasn from '../../img/sruthi_das_n.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-scroll'







const Intro = () => { 
  const springs = useSpring({
    from: { x: 0 },
    to: { x: -50 },
  });
  const sp = useSpring({
    from: { x: 0 },
    to: { x: 50 },   
  });

  return (
    <div className="i-wrapper">
        <div className="i-left">
            <div className="i-name">
                <span className='heading'>Hi! I am</span>
                <span className='primaryText'>Sruthi Das N</span>
                <span className='secondaryText'>Welcome to my portfolio – 
                  a testament to my relentless 
                    pursuit of excellence through 
                    self-learning and a showcase 
                    of my passion for MERN development.
                </span>
            </div>
              
            <Link spy={true} to='contact' smooth={true} activeClass='activeClass'>
              <button className="button i-button">Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/SruthiDasN">
                  <img src={ Github } alt="" />
                </a>
                <a href="https://www.linkedin.com/in/sruthi-das-n-bbb673277/">
                  <img src={ LinkedIn } alt="" />
                </a>
            </div>
        </div>

        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={sruthidasn} alt="" />

          <animated.div                     
            style={{
              top: '10%', 
              left:'68%',
              ...springs,
          }}
            
            >
          <div className="FloatingDiv">
            <FloatingDiv image={Crown} text1='MERN' text2='Developer'/>
          </div>
          </animated.div>

          <animated.div 
          style={{
            top: '18rem', 
            left:'0rem',
            ...sp,
            }}>
            <div className="FloatingDiv float">
              <FloatingDiv image={thumbup} text1='Self-learned' text2='Achiever'/>
            </div>
          </animated.div>           
          
          {/* Blur divs */}
          <div className='blur' style={{ background: "rgb(238 210 255)"}}></div>
          <div className="blur" 
            style={{
              background: '#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
              }}>
            </div>
        </div>
    </div>
  )
}

export default Intro