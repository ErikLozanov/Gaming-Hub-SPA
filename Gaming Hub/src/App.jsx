import { Routes, Route } from 'react-router-dom';

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

function App() {

  return (
    <AuthProvider>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/games/create-game' element={<CreateGame />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/logout' element={<Logout />} />
      </Routes>
     <Footer />
    </AuthProvider>
  )
}

export default App
