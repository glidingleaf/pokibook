import axios from 'axios';

const getPokemonByUrl = async ( URL ) => {
  const res = await axios.get(URL);
  // console.log('getPokemonByUrl');
  return res.data;
};

export default getPokemonByUrl;
