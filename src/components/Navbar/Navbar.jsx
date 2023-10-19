import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Sruthi</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    
                    <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Education' smooth={true} activeClass='activeClass'>
                        <li>Education</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                    </Link>               
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true} activeClass='activeClass'>
                <button className="button n-button">contact
                </button>
            </Link>
            
                
        </div>
    </div>
  )
}

export default Navbar