import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartW } from './CartWidget';

    export const NavBar = () => (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#inicio">OpticaVirtual</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#nosotros">SobreNosotros</Nav.Link>
          </Nav>
          <CartW/>
        </Container>
        </Navbar>
    )
      
    export default NavBar;