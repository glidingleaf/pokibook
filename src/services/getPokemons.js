import axios from 'axios';

const getPokemons = async ({ BASEURL, pokemonsPerPage, currentPage })=>{

  let params = {
    offset: (currentPage - 1) * pokemonsPerPage,
    limit: pokemonsPerPage,
  };
  const res = await axios.get(BASEURL, { params });

  return res.data;
}

export default getPokemons;
