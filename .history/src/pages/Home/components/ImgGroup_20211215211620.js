import React from "react";
import { Card,Col,Row } from "react-bootstrap";
import cardModel1 from "../../../media/img/cardModel1.jpg";
import cardModel1_rever from "../../../media/img/cardModel1_rever.jpg";
import cardModel2 from "../../../media/img/cardModel1.jpg";
import cardModel2_rever from "../../../media/img/cardModel1_rever.jpg";
import cardModel3 from "../../../media/img/cardModel1.jpg";
import cardModel3_rever from "../../../media/img/cardModel1_rever.jpg";
import cardModel4 from "../../../media/img/cardModel1.jpg";
import cardModel4_rever from "../../../media/img/cardModel1_rever.jpg";


export default function ImgGroup (){
    return(
        <Row xs={2} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col >
                <div className="flipy">
                    <Card className="card">
                        <div className="face front">
                            <Card.Img variant="top" src={cardModelidx]} />
                            <Card.Body className="card-img-overlay">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div className="face back">
                            <Card.Img variant="top" src={cardModel1_rever} />
                            <Card.Body className="card-img-overlay">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </Col>
            ))}
        </Row>
    )
}