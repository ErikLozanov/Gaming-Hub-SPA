import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.js';
import Header from './components/Home/Header.js';
import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop.js';

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Shop />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
