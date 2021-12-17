import React from "react";
import { Navbar,Nav,NavDropdown,Offcanvas, Card, Col, CardImg} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {  } from "";

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
                        <Card className="mb-3 w-100" >
                            <Row className="g-0">
                                <Col className="md-4">
                                    <Card.Img src={} className="img-fluid rounded-start"/>
                                </Col>
                                <Col className="md-8">
                                    <Card.Body>
                                        <Card.Title> Product </Card.Title>
                                        <Card.Text>18$</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Nav>
                </Offcanvas.Body>
        </Navbar.Offcanvas>
        </>
        
    )
}