import React from 'react';
import Pagination from '@components/Pagination';
import PokemonCard from '@components/PokemonCard';
import './Pokepedia.css';


const Pokepedia = () => {
  return (
    <div className="pokepedia">
      <div className='pokemon-cards-container'>

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

      </div>

      <Pagination />
      
    </div>
  )
}

export default Pokepedia;