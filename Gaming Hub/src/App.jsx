import { Routes, Route, useNavigate } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Games from './components/Shop/Games';
import ContactUs from './components/ContactUs/ContactUs';
import CreateGame from './components/CreateGame/CreateGame';
import Login from './components/SignIn/Login';
import AuthProvider from './contexts/AuthContext';
import Register from './components/SignIn/Register';
import { Logout } from './components/SignIn/Logout';

import {gameServiceFactory} from './services/gameService';

function App() {
  const navigate = useNavigate();
  const [games,setGames] = useState([]);
  const gameService = gameServiceFactory();


  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    setGames(state => [...state, newGame]);

    navigate('/games');
  }
  return (
    <AuthProvider>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/games/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/logout' element={<Logout />} />
      </Routes>
     <Footer />
    </AuthProvider>
  )
}

export default App
