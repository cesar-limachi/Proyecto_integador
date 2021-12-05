import { Fragment } from "react"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/esm/Col";
import Navegacion from "./layouts/nabvar";
import Card from 'react-bootstrap/Card'
import logo from './layouts/img/logo1.png'
import Button from "react-bootstrap/Button";
import style from './styles.css'
import Fondo from './layouts/img/Sel.jpg'
function Habitacion() {
    return (
        <Fragment>
            <Navegacion />
            <center>
                <div style={{
                    backgroundImage: 'URL(https://media-cdn.tripadvisor.com/media/photo-s/0a/05/24/a4/nastasi-hotel-spa.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '90vh',
                    backdropFilter: 'blur(10px)'}}>

                    <Container style={{
                        paddingTop: '100px',}}>

                        <Row style={{
                            height: '100%',}}>

                            <Col sm={7}>
                                <img className='ImagenHabitacion' src='https://media-cdn.tripadvisor.com/media/photo-s/0a/05/24/a4/nastasi-hotel-spa.jpg' />
                            </Col>
                            <Col sm={5} style={{
                                backgroundColor: '#ffffffa8 !important',
                                backdropFilter: 'blur(10px)'}}>

                                <Card width="100%" style={{
                                    height: '100%',
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,255,255,0.5)'}}>

                                    <div style={{
                                        textAlign: 'left',
                                        height: '100%',
                                        padding: '10px',
                                        overflow: 'auto',}}>

                                        <Card.Title>Nombre de la habitacion</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Numero de habitacion</Card.Subtitle>
                                        <Card.Text>
                                            Servicios /* Wifi , Cerradura electronica , etc. */
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                            Descripcion de la habitacion
                                        </Card.Text>
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        height: '20%',
                                        padding: '10px'
                                    }}>
                                        <Button variant="success" style={{}}>Completar reserva</Button>{' '}
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </center>
        </Fragment >
    )
}

export default Habitacion;