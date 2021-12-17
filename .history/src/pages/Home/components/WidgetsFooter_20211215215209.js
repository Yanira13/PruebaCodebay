import React from "react";
import { Nav,Col,Row } from "react-bootstrap";

export default function WidgetsFooter (){
    return(
        <Row className="position-absolute bottom-0 end-0">
            <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        
    )
}