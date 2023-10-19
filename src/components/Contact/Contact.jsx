import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



    

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_07197ul', 'template_yxflawd', form.current, 'wSnzRp8yLJaNnAFAi')
      .then((result) => {
          console.log(result.text);
          setStatus(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [status, setStatus] = useState(false)

  return (
    <div className='contact-wrapper' id='contact' >
        <div className="c-left">           
                <span className='heading'>Get in Touch</span>
                <span className='primaryText'>Contact Me</span>
                <div
                    className='blur s-blur1'
                    style={{background: '#ABF1FF94'}}
                ></div>
        </div>            
                
            
    

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='from_name' className='user' placeholder='Name' required/>
                <input type="email" name='user_email' className='user' placeholder='Email' required/>
                <textarea name='message' className='user' placeholder='Message' required/>
                <input type="submit" value="send" className='button'/>
                <span >{status && 'Thank you for contacting me!'}</span>
                <div
                    className='blur c-blur1'
                    style={{ background: 'var(--purple)' }}
                ></div>
            </form>
        </div>

    </div>
  )
}

export default Contact