import Cta from "./Cta";
import Features from "./Features";
import MainBanner from "./MainBanner";
import Trending from "./Trending";

export default function Home({allGames}) {

    return(
        <>
      <MainBanner />
      <Features />
      <Trending allGames={allGames}/>
      {/* <Cta /> */}
        </>
    );
}