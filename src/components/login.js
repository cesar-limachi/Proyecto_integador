import react, { Fragment } from 'react';
import Navegacion from './layouts/nabvar'
import style from './styles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <Fragment>
            <Navegacion />
            <center>
                <div className={'fondoLogin h-100'}>
                    <div className='container container-small mt-10'>
                        <Form className={'formlogin'} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='labellogin'>Usuario o correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su correo" />
                                <Form.Text className="text-muted">
                                    No comparta su informacion.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='labellogin'>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="********" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className='labellogin' type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Iniciar Sesion
                            </Button>
                        </Form>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}

export default Login;