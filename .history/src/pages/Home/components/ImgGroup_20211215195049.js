import React from "react";
import { Card,Col,Row } from "react-bootstrap";
import cardmModel1 from "../../../media/img/cardModel1.jpg";
import cardmModel2 from "../../../media/img/cardModel2.jpg";
import cardmModel3 from "../../../media/img/cardModel3.jpg";
import cardmModel4 from "../../../media/img/cardModel4.jpg";

export default function ImgGroup (){
    return(
        <Row xs={2} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={cardmModel+idx} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}