import React from "react";
import { Navbar,Container,Nav,NavDropdown,Offcanvas,Form,FormControl,Button } from "react-bootstrap";
import Login from "./Login";
import OffcanvasShop from "./OffcanvasShop";

export default function HeaderShop (){
    return(
        <Navbar bg="light" expand={false} >
            <Container fluid className="d-flex justify-content-end">
                <Form className="d-flex me-5">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <OffcanvasShop className=/>
                <Login/>
            </Container>
        </Navbar>
    )
    
}