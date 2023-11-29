import { Link } from "react-router-dom";

import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { gameServiceFactory } from "../../services/gameService";
import { useAuthContext } from "../../contexts/AuthContext";
import AddedGame from "../partials/AddedGame";

export default function Profile() {

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
        <h3>My Profile</h3>
        <span className="breadcrumb">
          <Link to="/">Home</Link> &gt; My Profile
        </span>
      </div>
    </div>
  </div>
</div>
<div className={styles['main-container']}>

    <section className={styles['main-section']}>
        <div>

        <div className={styles['main-photo']}>
      <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Your Name" className={styles['profile-picture']} />
        <div className={styles['main-info']}>
      <h1>Gosho</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor libero non est consequat, vel ultricies ligula tempor.</p>
        
        <p>Joined: 2017</p>
        </div>
      </div>
      <div className={styles['main-info']}>

      <Link>Edit Profile</Link>
      </div>
        </div>
        
            <div className={styles['added-games']}>
        <h3>Added Games({myGames.length})</h3>

        <div className="main-button">
          <Link to="added-games">View All</Link>
        </div>
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