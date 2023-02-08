import './PokemonInfo.css';

import Carousel from '@components/Carousel';
import PokemonAttributes from '@components/PokemonAttributes';
import PokemonStats from '@components/PokemonStats';
import NotFound from '@components/NotFound';

import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import getPokemonByUrl from '@services/getPokemonByUrl.js';


const PokemonInfo = (pokemonDataParam) => {

  const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

  const pokemonIdentifier = useRef('');
  const url = useRef(null);
  const pokemonData = useRef(null);
  const getPokemonFlag = useRef(false);

  const { pokemonId } = useParams();

  if (!pokemonData.current) {
    pokemonIdentifier.current = pokemonId;
    url.current = BASEURL + pokemonIdentifier.current;

    getPokemonFlag.current = true;
  }
 else{
  // when initiated from another page
 }

  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', {
      url: url.current
    }],
    queryFn: () => getPokemonByUrl(url.current),
    enabled: getPokemonFlag.current,
    retry: false
  });


  if (isLoading) {
    console.log('loading');
  }
  else if (error) {

    getPokemonFlag.current = false;
    return(<NotFound/>);

  }
  else {
    pokemonData.current = data;
    getPokemonFlag.current = false;
  }


  return (
    isLoading ? null:
      <div className='pokemon-info'>

        <div className='img-stats-container'>

          <Carousel images={pokemonData.current.sprites} />

          <div className='pokemon-name'>
            <h2>{pokemonData.current.name}</h2>
          </div>

          <div className='pokemon-stats-container'>
            <PokemonStats
              stats={pokemonData.current.stats}
            />
          </div>

        </div>

        <div className='pokemon-attributes-container'>
          <PokemonAttributes
            attributes={
              {
                baseExperience: pokemonData.current['base_experience'],
                height: pokemonData.current['height'],
                weight: pokemonData.current['weight'],
                types: pokemonData.current['types'],
                abilities: pokemonData.current['abilities'],
                heldItems: pokemonData.current['held_items'],
              }
            }
          />
        </div>

      </div>

  )


}

export default PokemonInfo;