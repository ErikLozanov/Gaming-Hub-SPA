import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { gameServiceFactory } from "../../services/gameService";

import { useAuthContext } from "../../contexts/AuthContext";
import Comments from "./Comments";
import { useGameContext } from "../../contexts/GameContext";

export default function Details() {
  const {onDeleteGame, buyGame} = useGameContext();
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState({});
  const [isBought, setIsBought] = useState(false);
  const [show, setShow] = useState(false);
  const [boughtTimes, setBoughtTimes] = useState(0);
  const { isAuthenticated, userId } = useAuthContext();
  const gameService = gameServiceFactory();


  useEffect(() => {
    gameService.getOne(id)
      .then((res) => {
        setGameInfo(res)
        const isBought = res.boughtBy.some(gameId => gameId === userId);
        setIsBought(isBought);
        setBoughtTimes(res.boughtBy.length);
      })
      .catch((err) => console.log(err.message));
  }, []);


  const bought = () => {
    setIsBought(true);
    setBoughtTimes(state => state + 1);
  }
  // const isOwner = gameInfo._ownerId._id === userId;
  const isOwner = gameInfo._ownerId && gameInfo._ownerId._id === userId;
  const ownerId = gameInfo._ownerId ? gameInfo._ownerId._id : null;
  const isMyProfile = sessionStorage.getItem('userId') === ownerId ? '/users/my-profile/' : `/users/${ownerId}/profile`;

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Details</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; <Link to="/games">Games</Link>{" "}
                &gt; {gameInfo.title}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product section">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>You are about to delete this game.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this game?</Modal.Body>
        <Modal.Footer style={{display:'flex', flexDirection:'row',flexWrap:'nowrap'}}>
          <Button variant="primary" onClick={() => onDeleteGame(gameInfo._id)}>
            Yes
          </Button>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={gameInfo.img} alt={gameInfo.title} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>{gameInfo.title}</h4>
              <span className="price">{`$${gameInfo.price}`}</span>
              <p>{gameInfo.description}</p>
              {isAuthenticated && (
                <>
                  {isOwner ? 
                    <div className="owner-btns">
                      <Link
                        to={`/games/edit-game/${gameInfo._id}`}
                        className="button"
                      >
                        Edit
                      </Link>
                      <Button as={Link}
                        className="button"
                        variant="primary"
                        onClick={() => setShow(true)}>
                        Delete
                      </Button>
                    </div>
                   : 
                   isBought ? <p className="button">Game bought!</p> :
                   <Button  variant="success" onClick={() => buyGame(gameInfo._id, userId, bought)}>
                     <i className="fa fa-shopping-bag" /> BUY NOW
                   </Button>

                    
                  }
                  
                </>
              )}
              <ul>
                <li>
                  <span>Released Year:</span> {gameInfo.year}
                </li>
                <li>
                  <span>Genre:</span> {gameInfo.category}
                </li>
                <li>
                  <span>Bought by:</span> {boughtTimes} {boughtTimes == 1 ? 'player' : 'players' }
                </li>
                <li>
                <span>Added by:</span>
                {gameInfo._ownerId ? (
                <Link to={isMyProfile}>{gameInfo._ownerId.username}</Link>
                  ) : (
               <span>Unknown User</span>
                )}
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sep" />
            </div>
          </div>
        </div>
      </div>
      <div className="more-info">
        <Comments />
      </div>
    </>
  );
}
