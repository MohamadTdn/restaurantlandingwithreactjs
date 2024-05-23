import React from 'react'
import './Galleryitems.css'

const Galleryitems = ({imgSrc}) => {
  return (
    <>
        <img src={imgSrc} className='Gallery-item-image' alt="" />
    </>
  )
}

export default Galleryitems