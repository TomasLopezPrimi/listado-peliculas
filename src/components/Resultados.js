import axios from "axios";
import React , {useEffect, useState} from "react";
import {
  Heading,
  Image,
  Box,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

export default function Resultados () {

  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('keyword')
  const [moviesResults, setMoviesResults] = useState([])

  useEffect( () => {
    const endPoint = 'https://api.themoviedb.org/3/search/movie?api_key=db58277f9e97dd202bcbdc22cbde47db&language=en-US&page=1&include_adult=false&query=' + keyword;
    axios.get(endPoint).then(response => {
      const dataMovies = response.data.results
      if (dataMovies.length === 0) {
        Swal.fire(
          'Tu busqueda no arrojó resultados'
        )
      }
      setMoviesResults(dataMovies)
    })
    }, [keyword] )



  const colorStackBadge = useColorModeValue('gray.50', 'gray.800')
  const colorBox = useColorModeValue('white', 'gray.900')
  const colorText = useColorModeValue('gray.700', 'gray.400')

  const dataMap = moviesResults.map((movie, idx) => {
    return (
      <Box
        maxW={'320px'}
        w={'full'}
        bg={colorBox}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        margin={10}
        key={idx}>

        <Image
          size={'xl'}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={'Film photo'}
          mb={4}
          pos={'relative'}

        />
        <Heading fontSize={'2xl'} fontFamily={'body'} h={'50px'} >
          {movie.title}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          { }
        </Text>
        <Text
          h={'200px'}
          textAlign={'center'}
          color={colorText}
          px={3}
          display={'block'}
          overflowY={'scroll'} >
          {movie.overview}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={colorStackBadge}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={colorStackBadge}
            fontWeight={'400'}>
            #cine
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={colorStackBadge}
            fontWeight={'400'}>
            #movie
          </Badge>
        </Stack>
        <Button m={'5px'}>
          <Link to={'/detalle?movieID=' + movie.id}>Detalle</Link>
        </Button>
      </Box>
    )
  })


  return (
    <>
      <Text fontSize={'large'} marginLeft={'4%'} >Buscaste {keyword} </Text>
      {moviesResults && 
      <Box
        display={'flex'}
        flexWrap={'wrap'}>
        {dataMap}
      </Box>}
    </>
  )
}