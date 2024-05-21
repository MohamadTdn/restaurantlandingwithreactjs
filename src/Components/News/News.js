import React from 'react'
import './News.css'
import Newsitem from '../Newsitem/Newsitem'

const News = () =>  {

  let newsItems = [
    {id: 1, imgSrc: 'assets/offerimg1.webp', title: 'We Have Dilecious Food', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text'},

    {id: 2, imgSrc: 'assets/offerimg2.webp', title: 'Chef Special Menu', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text'},

    {id: 3, imgSrc: 'assets/offerimg3.webp', title: 'Merriage Celebrations', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text'},
  ]

  return (
    <div className='News'>
        <h1 className='title'>News</h1>
        <p className='desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='News-items-container'>
          {newsItems.map((news) => (
            <Newsitem {...news} ></Newsitem>
          ))}
        </div>
    </div>
  )
}

export default News