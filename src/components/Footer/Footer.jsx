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
              <Github size='3rem' />
              <Linkedin size='3rem' />
        </div>

      </div>
    </div>
  )
}

export default Footer