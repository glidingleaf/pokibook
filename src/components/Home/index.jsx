import './Home.css'
import { Link } from 'react-router-dom';
import pokibookTextImg from '@assets/pokibook-text.png';
import PokemonCard from '@components/PokemonCard';
import { useQuery } from '@tanstack/react-query';
import getPokemonByUrl from '@services/getPokemonByUrl';
const Home = () => {


  const BASEURL = 'https://pokeapi.co/api/v2/pokemon';
  const range = 500;
  let randomEndpoint = '/' + Math.floor(Math.random() * range);

  const {

    data: pokemonData,
    isLoading: pageDataIsLoading,

  } = useQuery({
    queryKey: ['pokemons', {
      BASEURL,
    }],
    queryFn: () => getPokemonByUrl(BASEURL + randomEndpoint),
    retry: true,
    staleTime: 20000
  });


  if (pageDataIsLoading) {
    return (
      <div>Page Loading</div>
    )
  }
  else {
    console.log(pokemonData);
  }
  return (
    <div className='home'>
      <section className='home-child-1'>
        <div className="pokibook-text-container">
          <img src={pokibookTextImg} alt="pokibook" />
        </div>
        <Link to='/pokemon'>
          <button className='explore-button'>Explore</button>
        </Link>
      </section>
      <section className='home-child-2'>
        <h1 className='title'>Pokemon of the Day</h1>
        <div className='card-container'>
          <PokemonCard pokemonData={pokemonData} />
        </div>
      </section>

    </div>
  )
}



export default Home;