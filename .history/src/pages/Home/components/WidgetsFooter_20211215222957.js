import React from "react";
import { Nav,Col,Row } from "react-bootstrap";

export default function WidgetsFooter (){
    return(
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" className="link-light">Active</Nav.Link>
                    <Nav.Link eventKey="link-1" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" className="link-light" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Col>
            <Col>
            </Col>
            <Col>3 of 3</Col>
        </Row>
        
    )
}