import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./NavBar.css";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import { BsFillBagFill } from "react-icons/bs";
//import { useCartContext } from '../../context/CartContext';
function NavBar(){
//const {iconItem} = useCartContext();
    return (
<>
  <Navbar bg="light" variant="light">
    <Container>
      <NavLink to="/">
    <Navbar.Brand href="#home">TennisApp</Navbar.Brand>
      </NavLink>
    <NavbarToggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link className="ml-2">
      <NavLink to={`/categoria/babolat`}>Babolat</NavLink>
      </ Nav.Link>
      <Nav.Link className="ml-2">
      <NavLink to={`/categoria/wilson`}>Wilson</NavLink>
      </Nav.Link>
      <Nav.Link className="ml-2">
      <NavLink to={`/contacto`} className="">Contacto</NavLink>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  {/* <Nav.Link className="ml-2">
      <NavLink to={`/cart`} className=""><BsFillBagFill/>{iconItem()}</NavLink>
      </Nav.Link> */}
</Container>
</Navbar>
</>

    )
}

export default NavBar