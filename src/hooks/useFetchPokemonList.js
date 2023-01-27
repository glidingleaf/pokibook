import axios from 'axios';
import { useState, useEffect } from 'react';


const useFetchPokemonList = (BASEURL,params) =>{

  const [loadingState, setLoadingState] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
    
  const fetchPokemons = async (BASEURL,params)=>{

    const pokemons = await axios.get(BASEURL,{params});
    // console.log(pokemons.data.results[0].url);
  
    Promise.all(pokemons.data.results.map(
          (pokemonObj)=>axios.get(pokemonObj.url)
        ))
      .then((data)=>{
        let pokemonList = data.map((e)=>e.data);
        // console.log(pokemonList);
        setPokemonList(pokemonList);
        setLoadingState(false);
      });
      
  
    }


  useEffect(()=>{
    setLoadingState(true);
    fetchPokemons(BASEURL,params);
    // console.log('data fetched');

  },[params]);

  return {loadingState, pokemonList};

}

export default useFetchPokemonList;