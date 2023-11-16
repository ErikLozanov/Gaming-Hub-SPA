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
import { useEffect, useState } from 'react';
import Details from './components/Shop/Details';
import EditGame from './components/EditGame/EditGame';
import MyAddedGames from './components/MyAddedGames/MyAddedGames';

function App() {
  const navigate = useNavigate();
  const [games,setGames] = useState([]);
  const gameService = gameServiceFactory();

  useEffect(() => {
    gameService.getAll()
    .then(result => {
      setGames(result);
    })
  },[]);

  const onCreateGameSubmit = async (data) => {
    const userId = sessionStorage.getItem('userId');
    const newGame = await gameService.create({...data, _ownerId: userId});
    setGames(state => [...state, newGame]);

    navigate('/games');
  };

  const onEditGameSubmit = async (data) => {
    const userId = sessionStorage.getItem('userId');
    const editedGame = await gameService.edit(data._id, data);

    setGames(state => state.map(game => game._id === editedGame._id ? editedGame : game));

    navigate(`/games/details/${data._id}`);
  };

  const searchGame = async (gameData) => {
    let result = await gameService.searchGame(gameData.title);
    console.log(result);
  };
  return (
    <AuthProvider>
     <Header />
      <Routes>
        <Route path='/' element={<Home allGames={games} />} />
        <Route path='/games' element={<Games allGames={games} searchGame={searchGame} />} />
        <Route path='/games/my-added-games' element={<MyAddedGames />} />
        <Route path='/games/details/:id' element={<Details />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/games/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
        <Route path='/games/edit-game/:gameId' element={<EditGame onEditGameSubmit={onEditGameSubmit} />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/logout' element={<Logout />} />
      </Routes>
     <Footer />
    </AuthProvider>
  )
}

export default App
