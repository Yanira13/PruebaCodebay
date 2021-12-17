import React from "react";
import { Card,Col,Row } from "react-bootstrap";
import cardModel1 from "../../../media/img/cardModel1.jpg";
import cardModel2 from "../../../media/img/cardModel2.jpg";
import cardModel3 from "../../../media/img/cardModel3.jpg";
import cardModel4 from "../../../media/img/cardModel4.jpg";

export default function ImgGroup (){
    return(
        <Row xs={2} md={4} className="g-4">
                <Col >
                    <Card>
                        <Card.Img variant="top" src={cardModel1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img variant="top" src={cardModel2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={cardModel1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    )
}