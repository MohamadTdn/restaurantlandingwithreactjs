import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
        <h1 className='Contact-title'>Get In Touch</h1>
        <p className='Contact-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='Contact-items'>        
            <form action="#" className='Contact-form'>
                <input className='Contact-name' type="text" placeholder='Enter your name' />
                <br />
                <input className='Contact-email' type="email" placeholder='Enter your Email' />
                <br />
                <textarea className='Contact-textarea' placeholder='Write your message'></textarea>
                <br />
                <input type="submit" className='Contact-Submit-btn' value="Send" />
            </form>
            <div className='Infos'>
                <img src="assets/about.webp" alt="" />
                <h5>Address</h5>
                <p className='Address'>121 Street, Melbourne Victoria3000 Australia</p>
                <h5>phone</h5>
                <h5 className='Phone'>90 987 65 44</h5>
                <h5>Email</h5>
                <h5 className='Email'>info@yoursite.com</h5>
            </div>
        </div>
    </div>
  )
}

export default Contact