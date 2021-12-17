import React from "react";
import { Navbar,Container,Nav,NavDropdown,Offcanvas,Form,FormControl,Button } from "react-bootstrap";
import Login from "./Login";

export default function HeaderShop (){
    return(
        <Navbar bg="light" expand={false}>
            <Container fluid>
                
                
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <
                <Login/>
            </Container>
        </Navbar>
    )
    
}