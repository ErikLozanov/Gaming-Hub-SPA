import { Routes, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Games from './components/Shop/Games';
import ContactUs from './components/ContactUs/ContactUs';
import CreateGame from './components/CreateGame/CreateGame';
import Login from './components/SignIn/Login';
import Register from './components/SignIn/Register';
import Logout from './components/SignIn/Logout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from './components/Shop/Details';
import EditGame from './components/EditGame/EditGame';
import MyAddedGames from './components/MyAddedGames/MyAddedGames';

import AuthProvider from './contexts/AuthContext';
import GameProvider from './contexts/GameContext';
import AuthGuard from './components/AuthGuard';
import Profile from './components/MyProfile/Profile';
import Profiles from './components/Profiles/Profiles';

function App() {


  return (
    <AuthProvider>
    <GameProvider>
     <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/games/details/:id' element={<Details />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/:userId/profile' element={<Profiles />} />
        <Route element={<AuthGuard />}>
        <Route path='/users/my-profile/' element={<Profile />} />
        <Route path='/users/logout' element={<Logout />} />
        <Route path='/users/my-profile/added-games' element={<MyAddedGames />} />
        <Route path='/games/edit-game/:gameId' element={<EditGame />} />
        <Route path='/games/create-game' element={<CreateGame />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
     <Footer />
     </GameProvider>
    </AuthProvider>
  );
};

export default App
