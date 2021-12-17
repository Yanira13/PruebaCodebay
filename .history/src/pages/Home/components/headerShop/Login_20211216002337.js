import React, {useState} from "react";
import { Button,Modal,Form,NavLink} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
            <>
            <NavLink className="link-dark me-3" onClick={handleShow}>
                <FontAwesomeIcon icon={faUser}/>
            </NavLink>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Sing In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="email" placeholder="User Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Col className=>
                            <Button variant="primary" type="submit" className="btn theme-bg btn-md full-width pop-login">
                                Login
                            </Button>
                        </Col>
                        
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                <NavLink className="link-dark" onClick={handleClose}>
                    Haven't An Account?
                </NavLink>
                <NavLink className="link-dark" onClick={handleClose}>
                    Forget Password
                </NavLink>
                </Modal.Footer>
            </Modal>
            </>
        );
}