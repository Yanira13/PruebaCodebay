import React from "react";
import { Nav,Col,Row, Image } from "react-bootstrap";
import comingSoon from "../../../media/img/comingSoon.jpg";

export default function WidgetsFooter (){
    return(
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="pt-3 m-1" xs={1} md={3}>
            <Col className="" style={{width:400+'px'}}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" className="link-light">Active</Nav.Link>
                    <Nav.Link eventKey="link-1" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link-light">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" className="link-light" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Col>
            <Col  style={{marginRight:50+'px'}}>
                
                    <h4 className="text-light" >Intro copy headline</h4>
                    <p className="text-light" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
              
            </Col> 
            <Col style={{marginLeft:46+'px',padding:0}} className="d-flex justify-contend-end">
                <h4 className="text-light mb-3" >Coming soon</h4>
                <p  className="imgComingSoon"/>
            </Col>
        </Row>
        
    )
}