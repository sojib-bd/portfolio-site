import React from 'react';
import './ProjectCart.css';

import { Card, CardDeck, Button } from 'react-bootstrap';


const ProjectCart = (props) => {
    const { image1, image2, image3, title1, title2, title3 } = props
    return (

        <>
            <CardDeck>
                <Card bg="dark" text="white">
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>{title1}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger" block><a href="https://github.com/sojib-bd/ema-john-simple" style={{ textDecoration: 'none', color: "white" }}>GitHub</a></Button>
                        <Button variant="danger" block><a href="https://ema-john-simple-b5a2a.firebaseapp.com/" style={{ textDecoration: 'none', color: "white" }}>Website</a></Button>
                    </Card.Footer>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>{title2}</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger" block><a href="https://github.com/sojib-bd/panda-commerce" style={{ textDecoration: 'none', color: "white" }}>GitHub</a></Button>

                        <Button variant="danger" block><a href="https://sojib-bd.github.io/panda-commerce/" style={{ textDecoration: 'none', color: "white" }}>Website</a></Button>
                    </Card.Footer>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Img variant="top" src={image3} height="280" />
                    <Card.Body>
                        <Card.Title>{title3}</Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger" block><a href="https://github.com/sojib-bd/doctors-portal" style={{ textDecoration: 'none', color: "white" }}>GitHub</a></Button>
                        <Button variant="danger" block><a href="https://doctors-portal-6d883.firebaseapp.com/" style={{ textDecoration: 'none', color: "white" }}>Website</a></Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    );
};

export default ProjectCart;