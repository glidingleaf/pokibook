import {  useState } from 'react';
import './Pokepedia.css';
import Pagination from '@components/Pagination';
import PokemonCard from '@components/PokemonCard';
import { useQuery } from '@tanstack/react-query';
import getPokemons from '@services/getPokemons';
import useFetchPokemonFromUrls from '@hooks/useFetchPokemonsFromUrls';




const Pokepedia = () => {

  const BASEURL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemonsPerPage,setpokemonsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const {

    data:pageData,
    isLoading:pageDataIsLoading,

  } = useQuery({
    queryKey:['pokemons',{
      BASEURL,
      pokemonsPerPage,
      currentPage
    }],
    queryFn: ({queryKey}) => getPokemons(queryKey[1]),
  });

  const {
    pokemonList,
    isLoading:pokemonListIsLoading
  } = useFetchPokemonFromUrls(pageData);

  if(pageDataIsLoading){
    return (
      <div>Page Loading</div>
    )
  }




  return (
    <div className="pokepedia">

      <div className='pokemon-cards-container'>
        {
          pokemonList.map((pokemonData)=>{
            return(
              <PokemonCard
                key={pokemonData.id}
                pokemonData={pokemonData}
              />
            )
          })
        }
      </div>

      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
    </div>
  )
}

export default Pokepedia;