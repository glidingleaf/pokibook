import './App.css';
import {Routes,Route} from 'react-router-dom'

import Pokepedia from '@components/Pokepedia';
import Layout from '@components/Layout';
import NotFound from '@/components/NotFound';



function App() {

  return (
    <>
      <Layout>

        <Routes>
          
          <Route path='/' element={<Pokepedia/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>

      </Layout>
    </>

  )
}

export default App;
