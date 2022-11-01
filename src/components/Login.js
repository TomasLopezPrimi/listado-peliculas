//Libraries
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom"
import { 
  Box, 
  Button, 
  Input, 
  InputGroup, 
  Heading, 
  InputRightElement,
  Center } 
from '@chakra-ui/react'
import Swal from 'sweetalert2' 

function Login() {

  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      Swal.fire({
        icon: 'error',
        title: 'No se ha podido iniciar sesión',
        text: 'No se permiten vacios'
      })
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'No se ha podido iniciar sesión',
        text: 'Debes escribir email correcto'
      })
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        icon: 'error',
        title: 'No se ha podido iniciar sesión',
        text: 'Credenciales inválidas'
      })
      
      return;
    }
    console.log("Datos validados")

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Ingresaste correctamente'
        })
        const token = res.data.token;
        sessionStorage.setItem("token", token)
        navigate('/listado');
      })
  }


  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  
  let token = sessionStorage.getItem("token")

  //Si ya tengo el token, que redirija a la sección listado automaticamente
  useEffect(() => {
    if (token != null) {
      navigate('/listado')
    }
  }, [token,navigate]);

  return (
    <>
      {/* {token && (navigate('/listado') )} */}
      <Center>
        <Box m={10} width={400} border={"solid 1px #618685"} padding="15px" borderRadius={"5px"} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;' >
          <Heading as='h4' size='md' textAlign={"center"} margin={5} >Formulario</Heading>
          <form onSubmit={submitHandler}>
            <label>
              <Heading as='h6' size='xs'>Correo electrónico</Heading> 
              <Input type="text" name="email" marginY={4} />
            </label>
            <label  >
              <Heading as='h6' size='xs'>Contraseña</Heading>
              <InputGroup marginY={4}>
                <Input 
                  type={show ? 'text' : 'password'} name="password" width={"auto"}/>
                <InputRightElement  w='120px' >
                  <Button onClick={handleClick} >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </label>
            <br/>
            <Button margin={"10px"} type="submit" >Ingresar</Button>
          </form>
        </Box>
      </Center>
    </>
  )
}

export default Login;