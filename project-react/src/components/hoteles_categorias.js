import React, { Component, Fragment } from 'react'
import '../App.css';
import Navegacion from '../components/layouts/nabvar';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Hoteles_categorias = () => {

    let params = useParams()

    const state = {
        hoteles: []
      }
    
    const componentDidMount = () => {
        axios.get(`http://127.0.0.1:8000/api/hoteles/${params.id}`)
        .then(res => {
            this.setState({ hoteles: res.data });
        })
    }

    componentDidMount()

    return (
    <Fragment>
        <Navegacion />
        <div className="fondo">
        <CardGroup className="container">
            { state.hoteles.slice(0, 4)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>

        <CardGroup className="container">
            { state.hoteles.slice(4, 8)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        <CardGroup className="container">
            { state.hoteles.slice(8, 12)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        <CardGroup className="container">
            { state.hoteles.slice(12, 16)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        <CardGroup className="container">
            { state.hoteles.slice(16, 20)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        <CardGroup className="container">
            { state.hoteles.slice(20, 24)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        <CardGroup className="container">
            { state.hoteles.slice(24, 28)
            .map(hotel => 
            <Card className='CardCustom ' style={{ margin: '15px' }}>
                <div className='TransparentCard'>
                <Card.Img variant="top" src={hotel.Imagen} width="100px" height="200px"/>
                <Card.Body>
                    <Card.Title>
                    <Link className='text-decoration-none text-dark' to="/habitacion">{hotel.Nombre_hotel}</Link>
                    </Card.Title>
                    <Card.Text>
                    Calificacion:<br />
                    {
                    Array.from(Array(parseInt(hotel.Calificacion)), (e, i) => {
                        return '⭐'
                    })}
                    </Card.Text>
                    <Card.Text> Ubicacion: {hotel.Ubicacion}</Card.Text>
                </Card.Body>
                </div>
            </Card>)}
        </CardGroup>
        </div>
        <div>
        </div>
    </Fragment>
    );

}

export default Hoteles_categorias
