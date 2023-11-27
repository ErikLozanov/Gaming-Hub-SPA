import { useEffect, useState } from "react";
import Features from "./Features";
import MainBanner from "./MainBanner";
import Trending from "./Trending";
import { gameServiceFactory } from "../../services/gameService";

export default function Home() {
  const [trendingGames, setTrendingGames] = useState([]);
  const gameService = gameServiceFactory();
  useEffect(() => {
    gameService
      .getTrending()
      .then((res) => setTrendingGames(res))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <MainBanner />
      <Features />
      <Trending trendingGames={trendingGames} />
      {/* <Cta /> */}
    </>
  );
}
