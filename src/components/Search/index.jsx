import React, { useState,useRef } from 'react';
import './Search.css';
import searchIcon from '@assets/ui/search.svg';
import { useQuery } from '@tanstack/react-query';
import getPokemonByUrl from '@services/getPokemonByUrl';
import pokeballImg from '@assets/pokeball_small.svg'

const Search = () => {

  const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [url,setUrl] = useState(null);
  const [showSearch,setShowSearch] = useState(false);
  const startSearch = useRef(false);
  const pokemon = useRef({});

  const mountedStyle = { animation: 'inAnimation 250ms ease-in' };
  
  
  const searchBoxRef = useRef(null);
  const searchContainerRef = useRef(null);
  
  const {data,isLoading,isFetched,error} = useQuery({
    queryKey:['pokemon',{
      url
    }],
    queryFn: () => getPokemonByUrl(url),
    enabled: startSearch.current,
    retry:false
  });


  if(isLoading){
    console.log('loading');    
  }
  else if(error){
    if(error.response.status == 404){
      pokemon.current = {
        name:'Not Found',
        img:pokeballImg,
      }

      startSearch.current = false;
    }
  }
  else {
    console.log(data);
    const {name,sprites} = data;
    const img = sprites['front_default'];
    pokemon.current = {
      name:name,
      img:img,
    }
    // console.log(img,name);
    startSearch.current = false;
  }
  
  
  const keyPressHandler =(e)=>{
    if(e.key == 'Enter'){
      setUrl(BASEURL + searchBoxRef.current.value);
      startSearch.current = true;
      console.log(document.activeElement);
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
          onBlur={()=>setShowSearch(false)}

        />
      </div>
      {
        showSearch
        ? <div className='search-result'>
            <img src={pokemon.current.img} alt="pokemon" />
            <h4>{pokemon.current.name}</h4>
          </div>
        : null
      }



      
    </div>
  )
}

export default Search