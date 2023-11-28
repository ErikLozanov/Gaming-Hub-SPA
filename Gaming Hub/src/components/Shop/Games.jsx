import { Link } from "react-router-dom";
import Game from "../partials/Game";
import useForm from "../../hooks/useForm";
import { useGameContext } from "../../contexts/GameContext";
import { useEffect } from "react";
import { gameServiceFactory } from "../../services/gameService";
import style from "./Games.module.css";

export default function Games() {
  const gameService = gameServiceFactory();
  const { games, setGames, searchGame } = useGameContext();

  useEffect(() => {
    gameService
      .getAll()
      .then((res) => setGames(res))
      .catch((err) => console.log(err.message));
  }, []);

  const { onSubmit, values, changeHandler } = useForm(
    {
      title: "",
    },
    searchGame
  );

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

          <div className={style['search-zone']}>
            <section className="search" role="search">
              <form onSubmit={onSubmit} className="search__form">
                <input
                  type="text"
                  placeholder="Search a game..."
                  name="title"
                  onChange={changeHandler}
                  value={values.title}
                />
                <button className="search__btn-submit" type="submit">
                  Search
                </button>
              </form>
            </section>
          </div>

          <div className="row trending-box">
            {games.length === 0 ? (
              <h1>No games found!</h1>
            ) : (
              games.map((game) => <Game key={game._id} game={game} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="search-input">
<form id="search" action="#">
  <input
    type="text"
    placeholder="Type Something"
    id="searchText"
    name="searchKeyword"
    // onKeyPress="handle"
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
</ul> */
}
