import React from 'react'
import './Newsitem.css'

const Newsitem = ({imgSrc, title, desc}) => {
  return (
     <div className='News-items'>
        <img className='News-item-image' src={imgSrc} alt="" />
        <h3 className='News-title'>{title}</h3>
        <p className='News-item-desc'>{desc}</p>
        <button className='Read-more-btn'>Read More</button>
    </div>
  )
}

export default Newsitem