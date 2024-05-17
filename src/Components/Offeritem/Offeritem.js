import './Offeritem.css'

const Offeritem = ({imgSrc, price, title}) => {
    return (
        <div className='Offer-item'>
            <img className='Offer-item-img' src={imgSrc} alt="" />
            <h4 className='Offer-item-price'>{price}$</h4>
            <h3 className='Offer-item-title'>{title}</h3>
            <p className='Offer-item-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam similique placeat accusantium iusto tempore esse consectetur libero eum. Repudiandae, voluptatum quasi dolore in ipsum quod enim beatae quas officiis?</p>
            <button className='Offer-item-order-btn'>Order Now</button>
        </div>
    )
}

export default Offeritem