import React from "react";
import { Navbar,Nav,NavDropdown,Offcanvas, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export default function OffcanvasShop (){
    return(
        <>
       
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-3">
             <FontAwesomeIcon icon={faShoppingBasket} />
        </Navbar.Toggle>
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Card className="mb3">

                        </Card>
                    </Nav>
                </Offcanvas.Body>
        </Navbar.Offcanvas>
        </>
        
    )
}