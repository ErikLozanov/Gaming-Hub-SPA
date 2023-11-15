import { Link } from "react-router-dom";
import Game from "../partials/Game";
import useForm from "../../hooks/useForm";
import { gameServiceFactory } from "../../services/gameService";

export default function Games({ allGames }) {

    const {getAll} = gameServiceFactory();
    const { onSubmit, values, changeHandler } = useForm({
        title: "",
        genre: "",
    },getAll);
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
                        <form onSubmit={onSubmit} id="search">
                            <input
                                type="text"
                                placeholder="Type Something"
                                id="searchText"
                                name="title"
                                onChange={changeHandler}
                                value={values.title}
                            />
                            <label htmlFor="gameFilter">Filter by Genre:</label>
                            <select onChange={changeHandler} name="genre" value={values.genre} id="gameFilter">
                                <option value="Show All">Show All</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Racing">Racing</option>
                            </select>
                            <button id="searchNow" type="submit"> Search Now</button>
                        </form>
                    </div>
                    <div className="row trending-box">
                        {allGames.map((game) => (
                            <Game key={game._id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
