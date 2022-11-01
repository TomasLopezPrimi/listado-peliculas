//Libraries
import React, {useEffect, useState} from 'react';
import {Routes , Route} from 'react-router-dom'

//Components
import Login from './components/Login'
import Listado from './components/Listado'
import Header from "./components/Header"
import Detalle from "./components/Detalle"
import Resultados from "./components/Resultados"
import Favoritos from './components/Favoritos';
// import Footer from "./components/Footer"


function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');
    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal)
      setFavorites(favsArray)
    }
  } , [])


  function addOrRemoveFromFavs (e) {
    const favMovies = localStorage.getItem('favs')

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h2').innerText
    const overview = parent.querySelector('p').innerText
    const id = btn.dataset.movieId // Usando dataset , guardé el movieID dentro del botón en 'Listado'
    const movieData = {
      imgURL, title, overview , id, isFavorite: false
    }
    //Lógica de agregar a la lista si no está o eliminarla si está
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id )

    if (!movieIsInArray) {   
      movieData.isFavorite = true
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs) )
      setFavorites(tempMoviesInFavs)
      console.log('Se agregó la pelicula "', movieData.title, '" a favoritos')
      console.log(tempMoviesInFavs)
    } else {
      movieData.isFavorite = false
      let moviesLeft = tempMoviesInFavs.filter(movie => movie.id !== movieData.id);
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('Se eliminó la pelicula "', movieData.title, '" de favoritos')
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path="/listado" element={<Listado favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route exact path="/resultados" element={<Resultados />} />
        <Route path="/favoritos" element={<Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
      </Routes>
    </>
  );
}

export default App;
