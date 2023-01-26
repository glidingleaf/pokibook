import React from 'react';
import './PokemonCard.css';

const PokemonCard = () => {
  const imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';

  return (
    <div className='pokemon-card-container'>
      
      <div className='pokemon-id'>#<span>35</span></div>
      <img src={imgSrc} alt="pokemon-sprite" />

      <h4><span>Id</span> : <span>25</span></h4>
      <h4><span>Name</span> : <span>pikachu</span></h4>
      <h4><span>type</span> : <span>electric</span></h4>
      <h4><span>order</span> : <span>35</span></h4>
      <h4><span>weight</span> : <span>60kg</span></h4>
      <h4><span>height</span>: <span>4</span></h4>

    </div>
  )
}

export default PokemonCard;