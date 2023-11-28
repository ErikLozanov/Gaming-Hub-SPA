import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameService";
import { useAuthContext } from "../../contexts/AuthContext";
import Game from "../partials/Game";

export default function MyAddedGames () {
    const [myGames,setMyGames] = useState([]);
    const {getAllById} = gameServiceFactory();
    const {userId} = useAuthContext();

    useEffect(() => {
      getAllById(userId)
      .then(res => setMyGames(res))
      .catch(err => console.log(err.message));

    },[]);
    return (
        <>
        <div className="page-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>My Added Games</h3>
        <span className="breadcrumb">
          <Link to="/">Home</Link> &gt; My Added Games
        </span>
      </div>
    </div>
  </div>
</div>
        <div className="section trending">
  <div className="container">

    <div className="row trending-box">
      {myGames.length === 0 ?
      <h1>You have no games added yet!</h1>
       : myGames.map(game => <Game key={game._id} game={game}/>)}
    </div>
  </div>
</div>

        </>
    );
};