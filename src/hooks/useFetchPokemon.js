import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchPokemon = (URL) =>{

  const [loadingState, setLoadingState] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (URL)=>{
    
    const res = await axios.get(URL);
    setPokemon(res.data);
    setLoadingState(false);
  }

  
  useEffect(()=>{
    setLoadingState(true);
    fetchPokemon(URL);
    // console.log(pokemon);
    // console.log('data fetched');

  },[]);

  return {loadingState, pokemon};

}

export default useFetchPokemon;