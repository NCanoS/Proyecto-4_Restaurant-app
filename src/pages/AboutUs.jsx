//Components
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

//Images
import Slide1Logo from "../assets/slide-1.jpg";
import Slide2Logo from "../assets/slide-2.jpg";
import Slide3Logo from "../assets/slide-3.jpg";
import FbLogo from "../assets/fb_icon.png";
import IgLogo from "../assets/Instagram_logo.png";
import TTLogo from "../assets/tiktok_logo.png";
import TwLogo from "../assets/Twitter-logo.png";

function AboutUs() {
    return(
        <>
        <Header/>
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Slide1Logo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Comida de excelente calidad</h1>
                    <h3>Nuestra comida está hecha con ingredientes frescos de la más alta calidad.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={Slide2Logo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>La mejor atención</h1>
                    <h3>Nuestro personal se encuentra capacitado para brindarle la mejor experiencia.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide3Logo}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Ambiente inolvidable</h1>
                    <h3>Nuestra ubicación y ambientación lo harán querer regresar todos los días.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <Container className="w-100 text-center">
            <Row className="gy-3">
                <Col>
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Body>
                            <Card.Header as="h5">Nacimiento</Card.Header>
                            <Card.Text>
                            Somos un restaurante fundado en 1910 que se ha mantenido a la vanguardia.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Body>
                            <Card.Header as="h5">Ubicación</Card.Header>
                            <Card.Text>
                                Eaque, consequuntur molestiae. Iste quasi odio labore quam numquam suscipit, expedita.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="py-md-3 py-xs-1 gy-3">
                <Col>
                <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Body>
                            <Card.Header as="h5">Calificación</Card.Header>
                            <Card.Text>
                                <h2>★★★★★</h2>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Síguenos en nuestras redes sociales:</Card.Subtitle>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Image src={FbLogo} fluid rounded/>
                                    </Col>
                                    <Col>
                                        <Image src={TTLogo} fluid rounded/>
                                    </Col>
                                    <Col>
                                        <Image src={TwLogo} fluid rounded/>
                                    </Col>
                                    <Col>
                                        <Image src={IgLogo} fluid rounded/>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <br></br>
        <Footer/>
    </>
    )
}
export default AboutUs;