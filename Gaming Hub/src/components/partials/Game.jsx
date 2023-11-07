import { Link } from "react-router-dom";


export default function Game({game}) {
    

    return (
        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
        <div className="item">
          <div className="thumb">
            <Link to={`/games/details/${game._id}`}>
              <img src={game.img} alt="" />
            </Link>
            <span className="price">${game.price}</span>
          </div>
          <div className="down-content">
            <span className="category">{game.category}</span>
            <h4>{game.title}</h4>
            <Link to={`/games/details/${game._id}`}>
              <i className="fa fa-shopping-bag" />
            </Link>
          </div>
        </div>
      </div>
    );
};