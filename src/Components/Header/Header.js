import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className="Header">
           <Navbar></Navbar>
            <div className='Header-data'>
                <h1 className='Header-title'>Welcome To <br /> Eatwell</h1>
                <h4 className='Header-subtitle'>Come and eat well with our delicious & healthy foods.</h4>
                <button className='Reserve-btn'>Reservation</button>
            </div>
        </div>
    )
}

export default Header