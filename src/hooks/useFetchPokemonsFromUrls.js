import axios from "axios";
import { useState, useEffect } from "react";

const useFetchPokemonsFromUrls = (pokemons) => {

  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);


  const fetchPokemons = async (pokemons) => {
    const res = await Promise.all(
      pokemons.results.map((pokemonObj) => axios.get(pokemonObj.url))
    );
   
    // console.log(res);
    setPokemonList(res.map((e) => e.data));
    setIsLoading(false);
  };

  useEffect(() => {
    if (pokemons) {
      setIsLoading(true);
      fetchPokemons(pokemons);
    }
  }, [pokemons]);

  return { pokemonList, isLoading };
};

export default useFetchPokemonsFromUrls;
