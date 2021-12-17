import React from "react";
import { Nav,Col,Row, Image } from "react-bootstrap";
import comingSoon from "../../../media/img/comingSoon.jpg";

export default function WidgetsFooter (){
    return(
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="pt-3 m-1 d-flex justify-content-between" xs={1} md={3}>
            <Col className="" >
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" className="link-light">Active</Nav.Link>
                    <Nav.Link eventKey="link-1" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link-light">Link</Nav.Link>
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
            <Col clas>
                <div>
                    <h4 className="text-light mb-3" >Coming soon</h4>
                    <p  className="imgComingSoon"/>
                </div>
            </Col>
        </Row>
        
    )
}