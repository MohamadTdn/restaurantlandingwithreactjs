import React from 'react'
import './Menuitem.css'

const Menuitem = ({imgSrc, title, desc, price}) => {
  return (
    <div className='Menu-item'>
        <img className='Menu-item-image' src={imgSrc} alt="" />
        <div className='Menu-item-data'>
            <h3 className='Menu-item-title'>{title}</h3>
            <p className='Menu-item-description'>{desc}</p>
            <h5 className='Menu-item-price'>{price} $</h5>
        </div>
    </div>
  )
}

export default Menuitem