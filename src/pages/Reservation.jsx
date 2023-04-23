import { Button, Container, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Reservation() {
    return(
        <>
        <Header/>
        <br></br>
        <Container>
            <h1>Haga una reservación con nosotros</h1>
        <Form>
        <Form.Group controlId="reservationDate">
            <Form.Label>Introduzca quien hace la reservación:</Form.Label>
            <Form.Control type="input" name="reservationName" placeholder="Nombre" required/>
            <br></br>
            <Form.Label>¿Para cuántas personas es la reservación?</Form.Label>
            <Form.Select aria-label="Default select" name="reservationAmount" required>
                <option disabled>Seleccione la cantidad de personas</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">más de 10</option>
            </Form.Select>
            <br></br>
            <Form.Label>Elija una fecha:</Form.Label>
            <Form.Control type="date" name="reservationDate" placeholder="Fecha" required/>
            <br></br>
            <Form.Label>Elija una hora:</Form.Label>
            <Form.Select aria-label="Default select" name="reservationTime" required>
                <option disabled>Seleccione una hora</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
            </Form.Select>
        </Form.Group>
        <br></br>
        <Button type="submit">Reservar</Button>
        </Form>
        <br></br>
        <div class="invalid-reservation">

        </div>
        </Container>
        <br></br>
        <Footer/>
        </>
    )
}
export default Reservation;