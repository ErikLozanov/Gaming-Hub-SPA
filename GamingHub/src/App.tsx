import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer.js';
import Header from './components/Home/Header.js';
import Home from './components/Home/Home.js';

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
