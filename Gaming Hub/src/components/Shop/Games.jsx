import { Link } from "react-router-dom";
import Game from "../partials/Game";

export default function Games({allGames}) {

  return (
        <>
        <div className="page-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>Our Shop</h3>
        <span className="breadcrumb">
          <Link to="/">Home</Link> &gt; Games
        </span>
      </div>
    </div>
  </div>
</div>
        <div className="section trending">
  <div className="container">
        <div className="search-input">
            <form id="search">
              <input
                type="text"
                placeholder="Type Something"
                id="searchText"
                name="searchKeyword"
              />
              <button id="searchNow" role="button">Search Now</button>
            </form>
          </div>
    <ul className="trending-filter">
      <li>
        <a className="is_active" href="#!" data-filter="*">
          Show All
        </a>
      </li>
      <li>
        <a href="#!" data-filter=".adv">
          Adventure
        </a>
      </li>
      <li>
        <a href="#!" data-filter=".str">
          Strategy
        </a>
      </li>
      <li>
        <a href="#!" data-filter=".rac">
          Racing
        </a>
      </li>
    </ul>
    <div className="row trending-box">
      {allGames.map(game => <Game key={game._id} game={game}/>)}
    </div>
  </div>
</div>

        </>
    );
};