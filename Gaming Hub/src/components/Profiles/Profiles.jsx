import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../MyProfile/Profile.module.css";

import * as authService from '../../services/authService';
import {gameServiceFactory} from "../../services/gameService";
import AddedGame from "../partials/AddedGame";

export default function Profiles() {
        const [profileData, setProfileData] = useState({});
        const [profileAddedGames, setProfileAddedGames] = useState([]);
        const {userId} = useParams();
        const gameService = gameServiceFactory();


        useEffect(() => {
          authService.getProfile(userId)
          .then(res => setProfileData(res))
          .catch(err => console.log(err.message));

          gameService.getAllById(userId)
          .then(res => setProfileAddedGames(res))
          .catch(err => alert(err.message));
        },[]);

    return(
        <>
            <div className="page-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>Profile</h3>
        <span className="breadcrumb">
          <Link to='/'>Home</Link> &gt; Profile
        </span>
      </div>
    </div>
  </div>
</div>
<div className={styles['main-container']}>
    <section className={styles['main-section']}>
        <div>

        <div className={styles['main-photo']}>
      <img src={profileData.profilePicture} alt={profileData.username} className={styles['profile-picture']} />
        <div className={styles['main-info']}>
      <h1>{profileData.username}</h1>
      <p>{profileData.description}</p>
        
        <p>Joined: {profileData.joinedDate}</p>
        </div>
      </div>
      <div className={styles['main-info']}>
      </div>
        </div>
        
            <div className={styles['added-games']}>
        <h3>Added Games({profileAddedGames.length})</h3>
        
            </div>
<div className="row trending-box">
  {profileAddedGames.length === 0 ?
  <h1>{profileData.username} has no games added yet!</h1>
   : profileAddedGames.map(game => <AddedGame key={game._id} game={game}/>)}
</div>
    </section>
  </div>
    </>
    );
};
