import React from "react";
import { Nav,Col,Row } from "react-bootstrap";

export default function WidgetsFooter (){
    return(
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="p-3" xs={1}>
            <Col className="">
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
                
                    <h4 className="text-light" >Intro copy headline</h4>
                    <p className="text-light" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
              
            </Col>
            <Col>

            </Col>
        </Row>
        
    )
}