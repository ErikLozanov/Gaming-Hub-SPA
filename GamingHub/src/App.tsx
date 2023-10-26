import Cta from './components/Home/Cta.js';
import Features from './components/Home/Features.js';
import Footer from './components/Home/Footer.js';
import Header from './components/Home/Header.js';
import MainBanner from './components/Home/MainBanner.js';
import Trending from './components/Home/Trending.js';

function App() {

  return (
    <>
     <Header />
      <MainBanner />
      <Features />
      <Trending />
      <Cta />
     <Footer />
    </>
  )
}

export default App
