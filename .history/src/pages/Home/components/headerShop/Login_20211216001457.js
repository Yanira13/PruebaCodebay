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
                        <Button variant="primary" type="submit" className="btn theme-bg btn-md full-width pop-login">
                            Login
                        </Button>
                    </Form>
                    <div className="form-group text-center">
								<span>Or Signup with</span>
							</div>
							
							<div className="social_logs mb-4">
								<ul>
									<li className="fb-login"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="gp-login"><a href="#"><i className="fa fa-google-plus"></i></a></li>
									<li className="ln-login"><a href="#"><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
}