import React from "react";
import { Navbar,Container,Nav,NavDropdown,Offcanvas,Form,FormControl,Button } from "react-bootstrap";
import Login from "./Login";
import OffcanvasShop from "./OffcanvasShop";

export default function HeaderShop (){
    return(
        <Navbar bg="light" expand="lg"expand="lg">
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
                <OffcanvasShop/>
                <Login/>
            </Container>
        </Navbar>
    )
    
}