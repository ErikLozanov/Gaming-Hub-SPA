import { useGameContext } from "../../contexts/GameContext";
import Features from "./Features";
import MainBanner from "./MainBanner";
import Trending from "./Trending";

export default function Home() {


    const {games} = useGameContext();

    return(
        <>
      <MainBanner />
      <Features />
      <Trending allGames={games}/>
      {/* <Cta /> */}
        </>
    );
}