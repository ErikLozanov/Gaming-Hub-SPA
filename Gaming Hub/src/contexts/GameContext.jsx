import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';

import {gameServiceFactory} from '../services/gameService';


export const GameContext = createContext();


export default function GameProvider ({children}) {
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
  
    const onDeleteGame = async (gameId) => {
      
      try {
        const deletedGame = await gameService.delete(gameId);
        setGames(state => state.filter(game => game._id !== deletedGame._id));
        navigate(`/games`);
      } catch (error) {
        console.log(error.message);
      }
  
    }
  
    const searchGame = async (gameData) => {
      let result = await gameService.searchGame(gameData.title);
      setGames(result);
    };
  
    const buyGame = async (gameId,buyerId, bought) => {
      try {
        const game = await gameService.getOne(gameId);
        game.boughtBy.push(buyerId);
        console.log(game);
        await gameService.edit(gameId, game);
        bought();
      } catch (error) {
        console.log(error.message);
      }
    };

    const contextValues = {
        games,
        setGames,
        onCreateGameSubmit,
        onEditGameSubmit,
        onDeleteGame,
        searchGame,
        buyGame,
    };


    return (
        <>
        <GameContext.Provider value={contextValues}>
            {children}
        </GameContext.Provider>
        </>
    );
};


export const useGameContext = () => {
    const context = useContext(GameContext);

    return context;
}
