import { Button, Container, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import * as AWS from 'aws-sdk';

const configuration = {
    region: 'us-east-1',
    secretAccessKey: 'BRHI9P/wpxe4PJtqjyf1Hc/xOYM92Gex1tksl59u',
    accessKeyId: 'AKIA5FPNY26C3Z22KTFR'
}

AWS.config.update(configuration);
const dynamo = new AWS.DynamoDB.DocumentClient();
const table = 'Restaurant-Reservation';

function Reservation() {

    //initialize form variables
    const [name,setName]= useState(null);
    const [people,setPeople]= useState(null);
    const [date,setDate]= useState(null);
    const [time,setTime]= useState(null);

    //Reservation function to send data to dynamodb
    const book = async (event) => {
        event.preventDefault();
        
        const paramsGET ={
            TableName: table
        }
        const dataGET = await dynamo.scan(paramsGET).promise();
        console.log(dataGET);

        let paramsPUT = {
            TableName: table,
            Item: {
                id_restaurant_reservation: dataGET.Items.length + 1,
                user_name: name, 
                people: people,
                date: date,
                time: time
            }
        }
        let data2 = dynamo.put(paramsPUT, (e,data)=>{
            if(e){
                console.log('Error: ',e)
            } else {
                alert("Reservación hecha correctamente");
            }
        });
        console.log(data2);
    }

    //Form
    return(
        <>
        <Header/>
        <br></br>
        <Container>
            <h1>Haga una reservación con nosotros</h1>
        <Form onSubmit={book}>
        <Form.Group controlId="reservationDate">
            <Form.Label>Introduzca quien hace la reservación:</Form.Label>
            <Form.Control type="input" value={name} placeholder="Nombre" required onChange={(reservationName)=>setName(reservationName.target.value)}/>
            <br></br>
            <Form.Label>¿Para cuántas personas es la reservación?</Form.Label>
            <Form.Select aria-label="Default select" value={people} required onChange={(reservationPeople)=>setPeople(reservationPeople.target.value)}> 
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
            <Form.Control type="date" value={date} placeholder="Fecha" required onChange={(reservationDate)=>setDate(reservationDate.target.value)}/>
            <br></br>
            <Form.Label>Elija una hora:</Form.Label>
            <Form.Select aria-label="Default select" value={time} required onChange={(reservationTime)=>setTime(reservationTime.target.value)}>
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
        </Container>
        <br></br>
        <Footer/>
        </>
    )
}
export default Reservation;