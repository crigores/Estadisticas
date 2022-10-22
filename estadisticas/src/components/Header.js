import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { Navbar, NavItem, NavDropdown , Offcanvas, Nav, Container, Button} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { FaUserLock } from "react-icons/fa";







export default function Header(){

  const {signOut} = useContext(AuthContext);

  const closeSession = () => {
      signOut();
  }

    return(
        <>

          {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navbarcss">
          <Container fluid>
            <Navbar.Brand href="#"> <img
                        alt="Restaurant Tu Hogar"
                        src="https://www.urbe.edu/images/logo-urbe.gif"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '} URBE Estadisticas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/User">Usuarios</Nav.Link>
                  <Nav.Link as={Link} to="/Report">Reportes</Nav.Link>
                  <Button onClick={() => closeSession()} className="btn btn-secondary ">
                    <FaUserLock  /> Log Out
                  </Button>
                  <NavDropdown
                    title="Luis Colmenarez"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
    
                    <NavDropdown.Item  onClick={() => closeSession()} className="Navop">Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

        </>
    )
}