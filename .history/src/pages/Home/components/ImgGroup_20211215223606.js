import React from "react";
import { Card,Col,Row } from "react-bootstrap";
import cardModel1 from "../../../media/img/cardModel1.jpg";
import cardModel1_rever from "../../../media/img/cardModel1_rever.jpg";
import cardModel2 from "../../../media/img/cardModel2.jpg";
import cardModel2_rever from "../../../media/img/cardModel2_rever.jpg";
import cardModel3 from "../../../media/img/cardModel3.jpg";
import cardModel3_rever from "../../../media/img/cardModel3_rever.jpg";
import cardModel4 from "../../../media/img/cardModel4.jpg";
import cardModel4_rever from "../../../media/img/cardModel4_rever.jpg";


export default function ImgGroup (){
    return(
        <Row xs={2} md={4} className="m-5">
            <Col >
                <Card className="card">
                        <Card.Img variant="top" className="img1" />
                        <Card.Body className="card-img-overlay d-flex align-items-end">
                            <div className="" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="text-light">
                                <Card.Title >Card title</Card.Title>
                                <Card.Text >
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </div>
                        </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className="card">
                        <Card.Img variant="top" className="img2" />
                        <Card.Body className="card-img-overlay d-flex align-items-end">
                            <div className="text-light" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text >
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </div>
                        </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className="card">
                        <Card.Img variant="top" className="img3" />
                        <Card.Body className="card-img-overlay d-flex align-items-end">
                            <div className="text-light" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                                <Card.Title  >Card title</Card.Title>
                                <Card.Text >
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </div>
                        </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className="card">
                        <Card.Img variant="top" className="img4" />
                        <Card.Body className="card-img-overlay d-flex align-items-end">
                            <div className="text-light" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                                <Card.Title >Card title</Card.Title>
                                <Card.Text >
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </div>
                        </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}