import './Search.css';
import { Link, redirect } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import searchIcon from '@assets/ui/search.svg';
import pokeballImg from '@assets/pokeball_small.svg';
import getPokemonByUrl from '@services/getPokemonByUrl';

const Search = () => {

  const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [url, setUrl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const startSearch = useRef(false);
  const pokemon = useRef({});

  /* -------------delay Show Search ----------------- */
  const [delayShowSearch, setDelayShowSearch] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowSearch(false), 100);
    setDelayShowSearch(false)

    return () => clearTimeout(timer);
  }, [delayShowSearch])
  /* ------------------------------------------------- */


  const searchBoxRef = useRef(null);
  const searchContainerRef = useRef(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', {
      url: url
    }],
    queryFn: () => getPokemonByUrl(url),
    enabled: startSearch.current,
    retry: false
  });


  if (isLoading) {
    // console.log('loading');
  }
  else if (error) {
    if (error.response.status == 404) {
      pokemon.current = {
        name: 'Not Found',
        img: pokeballImg,
      }

      startSearch.current = false;
    }
  }
  else {
    const { name, sprites } = data;
    const img = sprites['front_default'];
    pokemon.current = {
      name: name,
      img: img,
    }
    startSearch.current = false;
  }


  const keyPressHandler = (e) => {
    if (e.key == 'Enter') {
      setUrl(BASEURL + searchBoxRef.current.value);
      startSearch.current = true;
      setShowSearch(true);

    }
  }


  return (
    <div className='search-container' ref={searchContainerRef}>

      <div className='search-box-container'>
        <img src={searchIcon}
          className='search-icon' alt="search"
        />
        <input
          type="text"
          placeholder='Search Pokemon'
          className='search-box'
          ref={searchBoxRef}
          onKeyDown={keyPressHandler}
          onBlur={() => {
            setDelayShowSearch(true);
          }}

        />
      </div>
      {
        showSearch
          ?
          <Link
            to={`pokemon/${pokemon.current.name}`}
            onClick={() => {setShowSearch(false)}}
            className='search-result'>
              <img src={pokemon.current.img} alt="pokemon" />
              <h4>{pokemon.current.name}</h4>
          </Link>

          : null
      }




    </div>
  )
}

export default Search