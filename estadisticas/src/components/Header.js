import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { Navbar, NavItem, NavDropdown , Nav, Container, Button} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";







export default function Header(){

  const {signOut} = useContext(AuthContext);

  const closeSession = () => {
      signOut();
  }

    return(
        <>

              {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                        <img
                        alt="Tienda Online"
                        src="https://previews.123rf.com/images/danilzorin/danilzorin1803/danilzorin180300141/97068517-tienda-online-logo-de-la-tienda-online-logotipo-para-empresas-ilustraci%C3%B3n-vectorial-aislado.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    Tienda Online
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                      </NavItem>
                      <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                      </NavItem>
                      <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="">Ayuda</Nav.Link>
                      </NavItem>
                      <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/Cart">Mi Carrito</Nav.Link>
                      </NavItem>
                        
                        
                        
                        
                    </Nav>
                    <Nav className="mr-auto">
                        
                        <Button onClick={() => closeSession()} className="btn btn-secondary rounded-pill">Log Out</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

          <Navbar  expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/" className="Navop">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                </Nav>
                <Nav className="Navop">
                  <NavDropdown title="Luis Colmenarez" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => closeSession()} className="Navop">Log Out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}