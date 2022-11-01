import React from 'react'
import {
  Heading,
  Image,
  Box,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Button,
  IconButton
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom"

export default function Card({movie, idx, addOrRemoveFromFavs, isFavorite}) {

  const colorStackBadge = useColorModeValue('gray.50', 'gray.800')
  const colorBox = useColorModeValue('white', 'gray.900')
  const colorText = useColorModeValue('gray.700', 'gray.400')


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
      key={idx}
      position='relative'>
      <IconButton 
        h='5vh'
        onClick={addOrRemoveFromFavs}         
        icon={<StarIcon />}
        data-movie-id={movie.id}
        borderRadius='60px'
        position='absolute'
        top='5px'
        left='5px'
        colorScheme={isFavorite ? 'red' : 'cyan'}>
      </IconButton >
      <Image
        size={'xl'}
        src={ movie.imgURL ? movie.imgURL : "https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={'Film photo'}
        mb={4}
        

      />
      <Heading fontSize={'2xl'} fontFamily={'body'} h={'65px'} >
        {movie.title}
      </Heading>
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
}