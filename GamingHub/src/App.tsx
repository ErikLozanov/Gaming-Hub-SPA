import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home/Home.js';
import Games from './components/Shop/Games.js';
import ContactUs from './components/ContactUs/ContactUs.js';

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
