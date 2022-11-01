import {ColorModeSwitcher} from '../ColorModeSwitcher';
import React from "react"
import {
  Box,
  Flex,
  Button,
  HStack,
  Spacer,
  Text
} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import Buscador from "./Buscador"

export default function Header(props) {
  return (
    <Flex 
      bgGradient="linear(90deg, rgba(9,9,121,0.04243704317664565) 0%, rgba(6,135,166,0.6866947462578781) 52%)"
      position={'sticky'}
      >
      <Flex
        top="1rem"
        right="1rem"
        align="center"
      >
        <HStack
        >
          <Link to="/" >
            <Button
              variant="ghost"
              my={5}
              fontWeight='bold'
            >
              Home
                    </Button>
          </Link>
          <Link to="/listado" >
            <Button
              variant="ghost"
              my={5}
              fontWeight='bold'
            >
              Listado
                    </Button>
          </Link>
          <Link to="/favoritos" >
            <Button
              variant="ghost"
              my={5}
              fontWeight='bold'
              
            >
              Favoritos
                    </Button>
          </Link>
          <Text
            fontFamily='Karla'
            fontStyle='oblique'
            fontWeight='lighter'>{
            props.favorites.length > 0 ? (<>Peliculas en favoritos: {props.favorites.length}</>) : 'No hay favoritos' }</Text>
        </HStack>
        <Box >
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Spacer />
      <Flex 
        top="1rem"
        marginRight={'5%'}
        align="center"
        borderRadius={8}
        >
        <Buscador />
      </Flex>
    </Flex>
  )
}