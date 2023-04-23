import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import platillo1 from "../assets/platillo_1.jpg"
import platillo2 from "../assets/platillo_2.jpg"
import platillo3 from "../assets/platillo_3.jpg"
import platillo4 from "../assets/platillo_4.jpg"

function Menu() {
    return(
    <>
        <Header/>
        <br></br>
        <Container className="text-center">
            <h1>Conoce nuestros mejores platillos:</h1>
            <Row className="row-cols-4 py-md-3">
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo1}/>
                    <Card.Body>
                        <Card.Title>Ensalada de lechugas frescas</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo2}/>
                    <Card.Body>
                        <Card.Title>Salmón a la mantequilla</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $1500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo3}/>
                    <Card.Body>
                        <Card.Title>Costilla de cerdo asada</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $800</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo4}/>
                    <Card.Body>
                        <Card.Title>Pizza Margarita</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $750</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
            </Row>
            <Row className="row-cols-4 py-md-3">
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo1}/>
                    <Card.Body>
                        <Card.Title>Ensalada de lechugas frescas</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo2}/>
                    <Card.Body>
                        <Card.Title>Salmón a la mantequilla</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $1500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo3}/>
                    <Card.Body>
                        <Card.Title>Costilla de cerdo asada</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $800</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo4}/>
                    <Card.Body>
                        <Card.Title>Pizza Margarita</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $750</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
            </Row>
            <Row className="row-cols-4 py-md-3">
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo1}/>
                    <Card.Body>
                        <Card.Title>Ensalada de lechugas frescas</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo2}/>
                    <Card.Body>
                        <Card.Title>Salmón a la mantequilla</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $1500</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo3}/>
                    <Card.Body>
                        <Card.Title>Costilla de cerdo asada</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $800</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={platillo4}/>
                    <Card.Body>
                        <Card.Title>Pizza Margarita</Card.Title>
                        <Card.Text>
                        Ipsam quibusdam enim, quas doloribus eum vitae voluptate ducimus laborum accusamus quidem ex.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: $750</ListGroup.Item>
                        <ListGroup.Item>Calificación: ★★★★</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
            </Row>
        </Container>
        <br></br>
        <Footer/>
    </>
    )
}
export default Menu;