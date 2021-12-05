import react, { Fragment } from 'react';
import Navegacion from './layouts/nabvar'
import style from './styles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function Register() {
    return (
        <Fragment>
            <Navegacion />
            <center>
                <div className={'fondoLogin h-100'}>
                    <div className='container container-small'>
                        <Form className={'formlogin'} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Nombre de Usuario</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese un  usuario" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Correo</Form.Label>
                                <Form.Control type="email" placeholder="example@correo.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Row>
                                    <Col>
                                        <Form.Label className='labellogin'>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="********" />
                                    </Col>
                                    <Col>
                                        <Form.Label className='labellogin'>Confirmar contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="********" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}

export default Register;