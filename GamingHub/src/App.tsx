import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home/Home.js';
import Games from './components/Shop/Games.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import CreateGame from './components/CreateGame/CreateGame.js';

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/games/create-game' element={<CreateGame />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
