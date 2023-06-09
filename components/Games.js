import Masonry from "react-masonry-css";
import { ImSteam2 } from "react-icons/im";
import { TfiWorld } from "react-icons/tfi";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: ["400", "700"], subsets: ["latin"] });

export default function Games ({ processStatus, sameGames }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={`bottomDiv ${comfortaa.className}`}>
      {processStatus === 0 && (
        <span>Click the button to start the comparison.</span>
      )}
      {processStatus === 1 && <span>Getting Users' Games.</span>}
      {processStatus === 2 && <span>Filtering Games.</span>}
      {processStatus === 3 && <span>Getting Game Details.</span>}
      {processStatus === 4 && (
        <>
          <span>{`${sameGames.length} Oyun Bulundu`}</span>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="gamesDiv"
            columnClassName="gamesDiv-column"
          >
            {sameGames.map(
              (e) =>
                e.name && (
                  <div className="game" key={`'${e.steam_appid}'`}>
                    <img src={e.header_image} alt="" />
                    <span>{e.name}</span>
                    <div className="btns">
                      <a
                        target="_blank"
                        href={`steam://openurl/https://store.steampowered.com/app/${e.steam_appid}`}
                      >
                        <ImSteam2 />
                      </a>
                      <a
                        target="_blank"
                        href={`https://store.steampowered.com/app/${e.steam_appid}`}
                      >
                        <TfiWorld />
                      </a>
                      <span className="py-3 px-4 bg-[#ff531c] text-white">
                        {e.is_free ? "Free" : (e.price_overview != null ? e.price_overview.final_formatted : "N/A")}
                      </span>
                    </div>
                  </div>
                )
            )}
          </Masonry>
        </>
      )}
      {(processStatus === 444 || processStatus === 446) && (
        <span>Failed to Retrieve User Information.</span>
      )}
      {(processStatus === 445 || processStatus === 447) && (
        <span>Failed to retrieve User Games.</span>
      )}
    </div>
  );
};