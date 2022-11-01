import { Box, Heading } from "@chakra-ui/react";
import React from "react"
import Card from "./Card";

export default function Favoritos(props) {

  return (
    <>
    <Heading textAlign='center' margin='15px' size='lg' fontStyle='italic'>Favoritos</Heading>
    <Box
        display={'flex'}
        flexWrap={'wrap'}>
      
      {props.favorites.map(movie => (
        <Card idx={movie.id} movie={movie} addOrRemoveFromFavs={props.addOrRemoveFromFavs} key={movie.id} isFavorite={true} />
    ))}
    </Box>
    </>
  )
}