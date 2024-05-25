import React from 'react'
import { BiLogoTelegram , BiLogoInstagram , BiLogoTwitter  } from "react-icons/bi";
import './Copyright.css'

const Copyright = () => {
  return (
    <div className='Copyright'>
        <BiLogoTelegram/>
        <BiLogoInstagram/>
        <BiLogoTwitter/>
        <h2>Created By Mohamad Tadayon and ui by eatwell template in colorlib website</h2>
    </div>
  )
}

export default Copyright