import { Link } from "react-router-dom";
import TrendingGame from "../partials/TrendingGame";

export default function Trending({trendingGames}) {

    return (
        <>
        <div className="section trending">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-heading">
          <h6>Trending</h6>
          <h2>Best Sellers</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="main-button">
          <Link to="/games">View All</Link>
        </div>
      </div>
      {trendingGames.length === 0 ? <h4>No Games Added Yet!</h4> :
      trendingGames.map(game => <TrendingGame key={game._id} game={game}/>)
    }
    </div>
  </div>
</div>

        </>
    );
};