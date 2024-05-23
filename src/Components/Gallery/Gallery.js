import React from 'react'
import './Gallery.css'
import Galleryitems from '../Galleryitems/Galleryitems'

const Gallery = () => {
  return (
    <div className='Gallery'>
        <h1 className='Gallery-title'>Gallery</h1>
        <p className='Gallery-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='Gallery-items'>
            <Galleryitems></Galleryitems>
            <Galleryitems></Galleryitems>
            <Galleryitems></Galleryitems>
            <Galleryitems></Galleryitems>
            <Galleryitems></Galleryitems>
            <Galleryitems></Galleryitems>
        </div>
    </div>
  )
}

export default Gallery