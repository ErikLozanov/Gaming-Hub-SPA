import { Link, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { gameServiceFactory } from "../../services/gameService";
import { useGameContext } from "../../contexts/GameContext";

export default function EditGame() {
    
    const {onEditGameSubmit} = useGameContext();
    
    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            title: '',
            category: '',
            year: '',
            img: '',
            description: '',
            price: '',
        },
        onEditGameSubmit
    );

    const {getOne} = gameServiceFactory();
    const {gameId} = useParams();

        useEffect(() => {
            getOne(gameId)
            .then(res => changeValues(res))
            .catch(err => console.log(err.message));
       },[gameId]);

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Edit Game</h3>
                            <span className="breadcrumb">
                                <Link to="/">Home</Link> &gt;{" "}
                                <Link to="/games">Games</Link> &gt; Edit Game
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <section id="create-game">
                <form id="#" onSubmit={onSubmit}>
                    <div className="container">
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input
                            value={values.title}
                            onChange={changeHandler}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter game title..."
                        />

                        <label htmlFor="category">Category:</label>
                        <input
                            value={values.category}
                            onChange={changeHandler}
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter game category..."
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
                        />

                        <label htmlFor="game-img">Image:</label>
                        <input
                            value={values.img}
                            onChange={changeHandler}
                            type="text"
                            id="img"
                            name="img"
                            placeholder="Upload a photo..."
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={changeHandler}

                        ></textarea>
                        <label htmlFor="game-price">Price:</label>
                        <input
                            value={values.price}
                            onChange={changeHandler}
                            type="number"
                            id="price"
                            name="price"
                        />
                        <input
                            className="add-game-btn"
                            type="submit"
                            value="Edit Game"
                        />
                    </div>
                </form>
            </section>
        </>
    );
}
