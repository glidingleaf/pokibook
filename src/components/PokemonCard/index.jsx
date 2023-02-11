import './PokemonCard.css';

import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemonData }) => {

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
    <Link to={`pokemon/${id}`}>
      <div className='pokemon-card-container'>

        <div className='pokemon-id'>#<span>{id}</span></div>
        <img src={img} alt="pokemon-sprite" />

        <h4><span>Name</span> : <span>{name}</span></h4>
        <h4><span>Weight</span> : <span>{weight}</span></h4>
        <h4><span>Height</span>: <span>{height}</span></h4>
        <h4><span>XP</span> : <span>{xp}</span></h4>

      </div>
    </Link>
  )
}

export default PokemonCard;