import { Link } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import useForm from "../../hooks/useForm";

export default function CreateGame() {

    const {onCreateGameSubmit, createError, setCreateError} = useGameContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            title: "",
            category: "",
            year: "",
            img: "",
            description: "",
            price: "",
        },
        onCreateGameSubmit
    );

    setTimeout(() => setCreateError(''), 10000);

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add Game</h3>
                            <span className="breadcrumb">
                                <Link to="/">Home</Link> &gt;{" "}
                                <Link to="/games">Games</Link> &gt; Add Game
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <section id="create-game">
                <form id="#" onSubmit={onSubmit}>
                    <div className="container">
                        <label htmlFor="leg-title">Title:</label>
                        <input
                            value={values.title}
                            onChange={changeHandler}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter game title..."
                            required
                        />

                        <label htmlFor="category">Category:</label>
                        <input
                            value={values.category}
                            onChange={changeHandler}
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter game category..."
                            required
                        />

                        <label htmlFor="year">Year:</label>
                        <input
                            value={values.year}
                            onChange={changeHandler}
                            type="number"
                            id="year"
                            name="year"
                            min="1"
                            placeholder="1"
                            required
                        />

                        <label htmlFor="game-img">Image:</label>
                        <input
                            value={values.img}
                            onChange={changeHandler}
                            type="text"
                            id="img"
                            name="img"
                            placeholder="Upload a photo..."
                            required
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={changeHandler}
                            required
                        ></textarea>
                        <label htmlFor="game-price">Price:</label>
                        <input
                            value={values.price}
                            onChange={changeHandler}
                            type="number"
                            id="price"
                            name="price"
                            required
                        />
                        <input
                            className="add-game-btn"
                            type="submit"
                            value="Create Game"
                        />
                    </div>
                </form>
                {createError ? <h3 style={{color:"red", marginLeft: '750px'}}>{createError}</h3> : null}
            </section>
        </>
    );
}
