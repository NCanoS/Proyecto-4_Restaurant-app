//Compunents
import { Link } from 'react-router-dom';
import logo from '../assets/restaurant-logo.png'

//Styles
import { Image, Navbar } from 'react-bootstrap';


function Header() {
    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='px-lg-3'>
            <Navbar.Brand>
                <Link to='/' class="nav-link active" aria-current="page">
                <Image src={logo} fluid rounded width="50"/></Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to='/' class="nav-link active" aria-current="page">
                Restaurante Ucamp</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>

            <Navbar.Collapse className='justify-content-end'>
            <Navbar.Brand>
                <Link to='/menu' class="nav-link">Nuestro Menú</Link>
            </Navbar.Brand>

            <Navbar.Brand>
                <Link to='/reservation' class="nav-link">Reservaciones</Link>
            </Navbar.Brand>
            
            <Navbar.Brand>
                <Link to='/' class="nav-link">Nosotros</Link>
            </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;