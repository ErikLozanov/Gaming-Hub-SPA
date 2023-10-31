

export default function Game({game}) {
    

    return (
        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
        <div className="item">
          <div className="thumb">
            <a href="product-details.html">
              <img src={game.img} alt="" />
            </a>
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
};