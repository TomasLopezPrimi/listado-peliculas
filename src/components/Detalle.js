import React, { useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2' 
import CardDetalle from "./CardDetalle"


export default function Detalle(){

  let token = sessionStorage.getItem('token')

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  const [movie , setMovie] = useState(null)

  

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=db58277f9e97dd202bcbdc22cbde47db&language=en-US'
    axios
      .get(endPoint)
      .then(response => {
        const movieData = response.data
        setMovie(movieData)
      })
      .catch(error => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="/">Volver a la página principal</a>'
        })
      )
  }, [movieID]);

  return (
    <>
      {!token && <Navigate replace to="/" />}
      {movie && 
        <CardDetalle 
          key={movie.id}
          img={movie.backdrop_path}
          overview={movie.overview}
          genres={movie.genres}
          homepage={movie.homepage}
          title={movie.title}
        />}
    </>
  )
}