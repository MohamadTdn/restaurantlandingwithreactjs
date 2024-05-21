import React from 'react'
import './Menu.css'
import Menuitem from '../Menuitem/Menuitem'

const Menu = () => {

  let menuItems = [
    {id: 1, imgSrc: 'assets/menu1.webp', title: 'Salted Fried Chicken', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 35},

    {id: 2, imgSrc: 'assets/menu2.webp', title: 'Italian Sauce Mushroom', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 35},

    {id: 3, imgSrc: 'assets/menu3.webp', title: 'Salted Fried Chicken', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 24},

    {id: 4, imgSrc: 'assets/menu4.webp', title: 'Fried Potato w/ Garlic', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 15},

    {id: 5, imgSrc: 'assets/menu5.webp', title: 'Fried Potato w/ Garlic', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 12},

    {id: 6, imgSrc: 'assets/menu5.webp', title: 'Fried Potato w/ Garlic', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts', price: 12},
  ]

  return (
    <div className='Menu'>
        <h1 className='Menu-title'>Delicious Menu</h1>
        <p className='Menu-description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='Buttoms'>
            <button className='Menu-btn' >Breakfast</button>
            <button className='Menu-btn' >Launch</button>
            <button className='Menu-btn' >Dinner</button>
        </div>
        <div className='Items'>
          {menuItems.map ((item) => (
            <Menuitem {...item} ></Menuitem>
          ))}
        </div>
    </div>
  )
}

export default Menu

