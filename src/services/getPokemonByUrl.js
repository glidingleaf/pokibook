import axios from 'axios';

const getPokemonByUrl = async ( URL ) => {
  const res = await axios.get(URL);
  return res.data;
};

export default getPokemonByUrl;
