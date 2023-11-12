import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import {useAuthContext} from '../../contexts/AuthContext';
export default function Details() {
    const {id} = useParams();
    const [gameInfo,setGameInfo] = useState({});
    const {isAuthenticated, userId} = useAuthContext();
    const {getOne} = gameServiceFactory()

    useEffect(() => {
         getOne(id)
         .then(res => setGameInfo(res))
         .catch(err => console.log(err.message));
    },[]);

    const isOwner = gameInfo._ownerId === userId;

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Details</h3>
                            <span className="breadcrumb">
                                <Link to="/">Home</Link> &gt; <Link to="/games">Games</Link>{" "}
                                &gt; {gameInfo.title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img
                                    src={gameInfo.img}
                                    alt={gameInfo.title}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>{gameInfo.title}</h4>
                            <span className="price">
                                {`$${gameInfo.price}`}
                            </span>
                            <p>
                                {gameInfo.description}
                            </p>
                            {isAuthenticated &&
                            <>

                            {isOwner ?
                            <div className="owner-btns">    
                            <button>Edit</button>
                            <button>Delete</button>
                            </div>
                            :
                            <form id="qty" action="#">
                            <button type="submit">
                                <i className="fa fa-shopping-bag" /> ADD TO
                                CART
                            </button>
                        </form>
                            }
                            </>
                            }
                            <ul>
                                <li>
                                    <span>Released Year:</span> {gameInfo.year}
                                </li>
                                <li>
                                    <span>Genre:</span> <a href="#">{gameInfo.category}</a>{" "}
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul
                                            className="nav nav-tabs"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="reviews-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#reviews"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="reviews"
                                                    aria-selected="false"
                                                >
                                                    Reviews (3)
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-content"
                                        id="myTabContent"
                                    >
                                        <div
                                            className="tab-pane active"
                                            id="reviews"
                                            role="tabpanel"
                                            aria-labelledby="reviews-tab"
                                        >
                                            <p>
                                                Coloring book air plant shabby
                                                chic, crucifix normcore raclette
                                                cred swag artisan activated
                                                charcoal. PBR&amp;B fanny pack
                                                pok pok gentrify truffaut kitsch
                                                helvetica jean shorts edison
                                                bulb poutine next level
                                                humblebrag la croix adaptogen.{" "}
                                                <br />
                                                <br />
                                                Hashtag poke literally locavore,
                                                beard marfa kogi bruh artisan
                                                succulents seitan tonx waistcoat
                                                chambray taxidermy. Same cred
                                                meggings 3 wolf moon lomo irony
                                                cray hell of bitters
                                                asymmetrical gluten-free art
                                                party raw denim chillwave
                                                tousled try-hard succulents
                                                street art.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section categories related-games">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Action</h6>
                                <h2>Related Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a href="shop.html">View All</a>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/categories-01.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/categories-05.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/categories-03.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/categories-04.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/categories-05.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
