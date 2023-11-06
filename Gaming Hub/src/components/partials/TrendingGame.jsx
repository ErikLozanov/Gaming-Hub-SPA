export default function TrendingGame ({game}) {

    return (
        <div className="col-lg-3 col-md-6">
        <div className="item">
          <div className="thumb">
            <a href="product-details.html">
              <img src={game.img} alt="" />
            </a>
            <span className="price">${game.price}</span>
          </div>
          <div className="down-content">
            <span className="category">{game.category}</span>
            <h4>{game.title}</h4>
            <a href="product-details.html">
              <i className="fa fa-shopping-bag" />
            </a>
          </div>
        </div>
      </div>
    );
}