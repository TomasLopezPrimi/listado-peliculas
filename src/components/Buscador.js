import React from "react";
import { Stack, Input, Button } from "@chakra-ui/react";
import Swal from 'sweetalert2' 
import { useNavigate } from "react-router-dom";

export default function Buscador() {

  let navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim()
    if(keyword.length === 0) {
      Swal.fire(
        'Debes escribir palabra clave'
      )
    } else if (keyword.length < 4) {
      Swal.fire(
        'Debes escribir al menos 4 caracteres'
      )
    } else {
      e.currentTarget.keyword.value = ''
      navigate('/resultados?keyword=' + keyword, { replace: true })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Stack direction='row' spacing={'6px'} type={'text'} >
        <Input placeholder='Buscar...' size='md' name='keyword' border='solid 2px'  colorScheme='whiteAlpha' _placeholder={{ opacity: 1 , color: 'inherit' }} >
        </Input>
        <Button colorScheme='gray' type="submit" >Buscar</Button>
      </Stack>
    </form>
  )
}