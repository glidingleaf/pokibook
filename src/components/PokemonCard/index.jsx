import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({pokemonData}) => {
  const imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';

  const {
    id,
    name,
    weight,
    height,
    base_experience: xp,
    sprites
  } = pokemonData;
  const img = sprites['other']['official-artwork']['front_default'];

  return (
    <div className='pokemon-card-container'>
      
      <div className='pokemon-id'>#<span>{id}</span></div>
      <img src={img} alt="pokemon-sprite" />

      {/* <h4><span>Id</span> : <span>{id}</span></h4> */}
      <h4><span>Name</span> : <span>{name}</span></h4>
      {/* <h4><span>type</span> : <span>electric</span></h4> */}
      <h4><span>Weight</span> : <span>{weight}</span></h4>
      <h4><span>Height</span>: <span>{height}</span></h4>
      <h4><span>XP</span> : <span>{xp}</span></h4>

    </div>
  )
}

export default PokemonCard;