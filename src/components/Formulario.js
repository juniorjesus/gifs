import React, {useEffect, useState} from 'react'
import { Form, Button} from 'react-bootstrap'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        correo: ''
})

useEffect(() => {
    console.log('componentDidMount');
    return () => {
        console.log('componentDidUnmount');
    }
}, [datos.nombre])
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = ({target}) => { 
        //console.log(target.name);
        setDatos({
        ...datos,
        [target.name]: target.value
    })
       
    }

    //console.log(datos);
    return (
        <div>
            <h1>Formulario</h1>
           

            <Form onSubmit= {handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" value= {datos.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" name="correo" value={datos.correo} onChange={handleChange} />
                </Form.Group>
                <Button variant="dang
er">Sumar</Button>
            </Form>
        </div>
    )
}

export default Formulario
