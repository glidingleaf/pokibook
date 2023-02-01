import './App.css';
import {Routes,Route} from 'react-router-dom'

import Pokepedia from '@components/Pokepedia';
import Layout from '@components/Layout';
import NotFound from '@/components/NotFound';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';



function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout>

        <Routes>
          
          <Route path='/' element={<Pokepedia/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>

      </Layout>
    </QueryClientProvider>

  )
}

export default App;
