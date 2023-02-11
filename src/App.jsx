import './App.css';
import {Routes,Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Pokepedia from '@components/Pokepedia';
import Layout from '@components/Layout';
import PokemonInfo from '@components/PokemonInfo';
import Home from '@components/Home';
import NotFound from '@components/NotFound';



function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout>

        <Routes>
          
          <Route path='pokemon/:pokemonId' element={<PokemonInfo/>} />
          <Route path='pokemon' element={<Pokepedia/>} />
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>

      </Layout>
    </QueryClientProvider>

  )
}

export default App;
