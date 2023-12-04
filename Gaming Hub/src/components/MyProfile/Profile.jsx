import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { gameServiceFactory } from "../../services/gameService";
import { useAuthContext } from "../../contexts/AuthContext";
import AddedGame from "../partials/AddedGame";
import EditProfile from './EditProfile';

import * as authService from '../../services/authService';

export default function Profile() {
    const [show, setShow] = useState(false);
    const [myGames,setMyGames] = useState([]);
    const {getAllById} = gameServiceFactory();
    const {userId} = useAuthContext();
    const {username,description,profilePicture,_id} = JSON.parse(sessionStorage.getItem('auth'));
    const [profileInfo, setProfileInfo] = useState({username,description,profilePicture});
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
      getAllById(userId)
      .then(res => setMyGames(res))
      .catch(err => console.log(err.message));
    },[]);


    async function onEditProfile(data) {
      try {
        const editProfile = await authService.editProfile({...data, _id});
        console.log(editProfile);
        setProfileInfo({username: editProfile.username, description: editProfile.description, profilePicture: editProfile.profilePicture});
        sessionStorage.setItem('auth', JSON.stringify(editProfile));
      } catch (error) {
        console.log(error.message);
      }
    }

    return (
    <>
            <div className="page-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>My Profile</h3>
        <span className="breadcrumb">
          <Link>Home</Link> &gt; My Profile
        </span>
      </div>
    </div>
  </div>
</div>
<div className={styles['main-container']}>
      <EditProfile show={show} handleClose={handleClose} onEditProfile={onEditProfile}/>
    <section className={styles['main-section']}>
        <div>

        <div className={styles['main-photo']}>
      <img src={profileInfo.profilePicture} alt={profileInfo.username} className={styles['profile-picture']} />
        <div className={styles['main-info']}>
      <h1>{profileInfo.username}</h1>
      <p>{profileInfo.description}</p>
        
        <p>Joined: 2017</p>
        </div>
      </div>
      <div className={styles['main-info']}>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      </div>
        </div>
        
            <div className={styles['added-games']}>
        <h3>Added Games({myGames.length})</h3>
        {myGames.length > 4 &&
        <div className="main-button">
          <Link to="added-games">View All</Link>
        </div>
        }
            </div>
<div className="row trending-box">
  {myGames.length === 0 ?
  <h1>You have no games added yet!</h1>
   : myGames.slice(0,4).map(game => <AddedGame key={game._id} game={game}/>)}
</div>
    </section>
  </div>
    </>);
}