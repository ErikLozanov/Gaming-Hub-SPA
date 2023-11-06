import { Link } from "react-router-dom";
import TrendingGame from "../partials/TrendingGame";

export default function Trending({allGames}) {


    return (
        <>
        <div className="section trending">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-heading">
          <h6>Trending</h6>
          <h2>Trending Games</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="main-button">
          <Link to="/games">View All</Link>
        </div>
      </div>
      {allGames.map(game => <TrendingGame game={game}/>)}
    </div>
  </div>
</div>

        </>
    );
};