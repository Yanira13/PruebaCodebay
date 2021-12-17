import React from "react";
import { Navbar,Nav,NavDropdown,Offcanvas, Card, Col,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket,faTrash,faHeart } from '@fortawesome/free-solid-svg-icons'
import cardModel3_rever from "../../../../media/img/cardModel3_rever.jpg";

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
                    <Offcanvas.Title id="offcanvasNavbarLabel">Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Card className="mb-3 w-100"  >
                            <Row className="g-0">
                                <Col className="md-4" >
                                    <Card.Img src={cardModel3_rever} style={{height:150+'px'}} className="img-fluid rounded-start"/>
                                </Col>
                                <Col className="md-8">
                                    <Row style={{marginBottom:40+'px'}}>
                                        <Col>
                                        <Card.Body className="text-center">
                                            <Card.Title> Product </Card.Title>
                                            <Card.Text>18$</Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                   <Row style={{marginRight:5+'px'}}>
                                   <Col className="d-flex justify-content-end">
                                        <FontAwesomeIcon icon={faHeart} />
                                        </Col>
                                       <Col className="d-flex ">
                                        <FontAwesomeIcon icon={faTrash} />
                                        </Col>

                                   </Row>
                                    
                                </Col>
                            </Row>
                        </Card>
                    </Nav>
                </Offcanvas.Body>
        </Navbar.Offcanvas>
        </>
        
    )
}