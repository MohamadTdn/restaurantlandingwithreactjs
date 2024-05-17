import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <a href="#" className='logo'>Eatwell</a>
            <ul className='Navbar-menu'>
                <li><a href="#" className='Navbar-item'>Home</a></li>
                <li><a href="#" className='Navbar-item'>About</a></li>
                <li><a href="#" className='Navbar-item'>Offer</a></li>
                <li><a href="#" className='Navbar-item'>Menu</a></li>
                <li><a href="#" className='Navbar-item'>News</a></li>
                <li><a href="#" className='Navbar-item'>Gallery</a></li>
                <li><a href="#" className='Navbar-item'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar