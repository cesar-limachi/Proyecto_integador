import logo from './logo.svg';
import './App.css';
import react, { Fragment } from 'react';
import Navegacion from './components/layouts/nabvar';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom';

const calificacion = 5;

function App() {
  return (
    <Fragment>
      <Navegacion />
      <div className="fondo">
        <CardGroup className="container">
          <Card className='CardCustom ' margin= '10px'>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>
                  <Link className='text-decoration-none text-dark' to="/habitacion">Nombre del hotel</Link>
                </Card.Title>
                <Card.Text>
                  Calificacion:<br />
                  {Array.from(Array(calificacion), (e, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className='CardCustom' margin='10px'>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>Nombre del Hotel </Card.Title>
                <Card.Text>
                  Calificacion:<br />
                  {Array.from(Array(calificacion), (e = 1, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className='CardCustom' style={{ margin: '10px' }}>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>Nombre del Hotel </Card.Title>
                <Card.Text>
                  Calificacion:<br />
                  {Array.from(Array(calificacion), (e = 1, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </CardGroup>

        <CardGroup className="container">
          <Card className='CardCustom' style={{ margin: '10px' }}>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>Nombre del Hotel </Card.Title>
                <Card.Text>
                  Calificacion:<br />
                  {Array.from(Array(calificacion), (e = 1, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className='CardCustom' style={{ margin: '10px' }}>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>Nombre del Hotel </Card.Title>
                <Card.Text>
                  Calificacion: <br />
                  {Array.from(Array(calificacion), (e = 1, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className='CardCustom' style={{ margin: '10px' }}>
            <div className='TransparentCard'>
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
              <Card.Body>
                <Card.Title>Nombre del Hotel </Card.Title>
                <Card.Text>
                  Calificacion: <br />
                  {Array.from(Array(calificacion), (e = 1, i) => {
                    return '⭐'
                  })}
                </Card.Text>
                <Card.Text> Ubicacion: Ingresar ubicacion</Card.Text>
                <Card.Text> Descripcion del hotel mostrado </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </CardGroup>
      </div>
    </Fragment>
  );
}

export default App;
