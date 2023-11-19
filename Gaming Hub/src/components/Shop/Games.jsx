import { Link } from "react-router-dom";
import Game from "../partials/Game";
import useForm from "../../hooks/useForm";

export default function Games({ allGames, searchGame }) {

    const { onSubmit, values, changeHandler } = useForm({
        title: "",
    },searchGame);

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
                    <div >
                        <form className="searchInput" onSubmit={onSubmit} >
                            <div className="info-container">

                            <input
                                type="text"
                                placeholder="Search a game..."
                                id="search-text"
                                name="title"
                                onChange={changeHandler}
                                value={values.title}
                                />
                                </div>
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
