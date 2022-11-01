import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import {Box} from '@chakra-ui/react';
import axios from 'axios'
import Swal from 'sweetalert2'
import Card from './Card';


function Listado({addOrRemoveFromFavs, favorites}) {
  let token = sessionStorage.getItem("token")
  let navigate = useNavigate()
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=db58277f9e97dd202bcbdc22cbde47db&language=en-USpage=1"
    axios
      .get(endPoint)
      .then(response => {
        const dataApi = response.data
        setMoviesList(dataApi.results)
      })
      .catch(error =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        }))
  }, [token])

  const idsFavs = favorites.map (fav => fav.id)
  
  const dataMap = moviesList.map((movie, idx) => {
    if (idsFavs.includes(movie.id)) {
      return (
        <Card  idx={idx} movie={movie} addOrRemoveFromFavs={addOrRemoveFromFavs} key={idx} isFavorite={true} />
      )} else {
        return (
            <Card  idx={idx} movie={movie} addOrRemoveFromFavs={addOrRemoveFromFavs} key={idx} isFavorite={false} />
          )
      }
    }
    
  )

  return (
    <>
      {!token && (navigate('/'))}
      <Box
        display={'flex'}
        flexWrap={'wrap'}>
        {dataMap}
      </Box>
    </>
  )
}

export default Listado