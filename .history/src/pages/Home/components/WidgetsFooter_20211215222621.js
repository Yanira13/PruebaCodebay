import React from "react";
import { Nav,Col,Row } from "react-bootstrap";

export default function WidgetsFooter (){
    return(
        <Row className="wi">
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