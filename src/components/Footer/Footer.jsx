import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className='f-wrapper'>
      <img src={Wave} alt="" style={{width: '100%' }}/>
      <div className="f-content">
        <span>sruthidasnalini@gmail.com</span>
        <div className='f-icons'>
          <a href="https://github.com/SruthiDasN">
              <Github size='3rem' />
          </a>
          <a href="https://www.linkedin.com/in/sruthi-das-n-bbb673277/">
              <Linkedin size='3rem' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer