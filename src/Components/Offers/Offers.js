import './Offers.css'
import Offeritem from '../Offeritem/Offeritem'

const Offers = () => {
    return (
        <div className='Offers'>
            <h1 className='Offers-title'>Our Offer This Summer</h1>
            <p className='Offers-description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
            <div className='Offers-container'>
                <Offeritem imgSrc="assets/offerimg1.webp" price={20} title="Beef"></Offeritem>
                <Offeritem imgSrc="assets/offerimg2.webp" price={25} title="Beef Bils"></Offeritem>
                <Offeritem imgSrc="assets/offerimg3.webp" price={32} title="Beef With Sausage"></Offeritem>
            </div>
        </div>
    )
}

export default Offers