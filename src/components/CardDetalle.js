import React from "react";
import { 
  Heading,
  Text,
  Center,
  Image,
  Grid,
  GridItem,
  List,
  ListItem,
  Link } from '@chakra-ui/react'

export default function CardDetalle({img, overview, genres, homepage, title}) {
  return (
    <>
      <Center p={'20px'} boxShadow={'1px 1px 8px rgba(0, 0, 0, 0.25)'}>
        <Grid
          templateAreas={`"header header"
                          "main nav"
                          "main footer"`}
          gridTemplateRows={'65px 300px 30px'}
          gridTemplateColumns={'250px 1fr'}
          fontFamily='Nunito Sans'
          h='500px'
          w='70%'
          color={'blackAlpha'}
          gap='1'
          fontWeight='bold'
          border='solid 2px'
          borderRadius={'10px'}
        >
          <GridItem 
            pl='2' 
            border={'black solid'}
            borderRadius={'7px'}
            bgGradient="linear(90deg, rgba(9,9,121,0.04243704317664565) 0%, rgba(6,135,166,0.6866947462578781) 52%)" 
            p={1}
            area={'header'}
            textAlign={'center'} >
            <Heading 
              textAlign={'center'} 
              m={'10px'}
              fontFamily='Nunito Sans'
              color='blackAlpha.700'
              
            >{title}</Heading>
          </GridItem>
          <GridItem  area={'nav'}>
            <Image
              boxSize='100%'
              size={'xl'}
              objectFit='cover'
              src={"https://image.tmdb.org/t/p/w500" + img}
              alt={'Film photo'}
              border={'black solid'}
              borderRadius={'10px'}
              mb={4}
              pr={'1px'}
              pos={'relative'}
              boxShadow={'1px 1px 8px rgba(0, 0, 0, 0.25)'}
            />
          </GridItem>
          <GridItem pl='2' area={'main'}>
            <Text fontSize={'sm'} fontWeight='400' >{overview}</Text>
            <br />
            <List spacing={3}> 
              {genres.map(genre => 
                <ListItem key={genre.id} >{genre.name} </ListItem>)}
            </List>
          </GridItem>
          <GridItem pl='2' area={'footer'}>
            <Link href={homepage}>Homepage</Link>
          </GridItem>
        </Grid>
      </Center>
    </>
  )
}