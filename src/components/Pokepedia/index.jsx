import React, { useEffect, useState } from 'react';
import './Pokepedia.css';
import axios from 'axios';
import Pagination from '@components/Pagination';
import PokemonCard from '@components/PokemonCard';
import useFetchPokemonList from '@hooks/useFetchPokemonList';




const Pokepedia = () => {
  const BASEURL = 'https://pokeapi.co/api/v2/pokemon';
  const [params,setParams] = useState({
    offset : 0,
    limit : 24,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const {loadingState, pokemonList} = useFetchPokemonList(BASEURL,params);


  


  return (
    <div className="pokepedia">

      <div className='pokemon-cards-container'>
        <PokemonCard />
      </div>

      <Pagination />
      
    </div>
  )
}

export default Pokepedia;