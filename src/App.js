import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination'
import axios from 'axios';
function App() {
  const [pokemon, setPokemon] = useState([])
  const[currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const[nextPageUrl, setNextPageUrl] = useState()
  const[prevPageUrl, setPrevPageUrl] = useState()
  const[loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    let cancel
    let next
    let prev
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      next = res.data.next
      prev = res.data.previous
      return res.data.results
    }).then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)))
    }).then((results) => {
      setLoading(false)
      setPokemon(results.map((res) => res.data))
      setNextPageUrl(next)
      setPrevPageUrl(prev)
    })

    return () => {
      cancel()
    }
  }, [currentPageUrl])

  if (loading) {
    return "Loading more pokemon...";
  }

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
    return currentPageUrl
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
    return currentPageUrl
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </>
);
}

export default App;
