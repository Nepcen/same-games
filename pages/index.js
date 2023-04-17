"use client";
import { sleep } from "@/utils/sleep";
import { useState } from "react";

//const apiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;

export default function Home({ apiKey }) {
  const [nick1, setNick1] = useState("Nepcen");
  const [nick2, setNick2] = useState("SloXen");
  const [sameGames, setSameGames] = useState([]);
  const [processStatus, setProcessStatus] = useState(0);

  //api.setKey(apiKey);

  const getUserId = async (username) => {
    const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${username}&format=json`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      return data.response.steamid;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUserGames = async (userId) => {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${userId}&format=json`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data.response);
      return data.response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getGameDetail = async (gameId) => {
    const url = `https://store.steampowered.com/api/appdetails?appids=${gameId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      if (data[gameId].success) {
        return data[gameId].data;
      }
      return { appID: gameId };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleClick = async () => {
    setProcessStatus(1);
    const userGame1 = (await getUserGames(await getUserId(nick1))).games;
    console.log(userGame1);

    const userGame2 = (await getUserGames(await getUserId(nick2))).games;
    console.log(userGame2);

    await sleep(500);

    setProcessStatus(2);

    const matchingGames = userGame1.filter((game1) => {
      return userGame2.some((game2) => game1.appid === game2.appid);
    });
    console.log(matchingGames);

    await sleep(500);

    setProcessStatus(3);
    let sameGamesDetails = [];
    await Promise.all(
      matchingGames.map(async (e) => {
        const gameDetail = await getGameDetail(e.appid);
        sameGamesDetails.push(gameDetail);
      })
    );

    await sleep(500);

    setProcessStatus(4);
    console.log(sameGamesDetails);
    setSameGames(sameGamesDetails);
  };

  const goster = () => {
    console.log(sameGames);
  };

  return (
    <>
      <div className="topDiv">
        <span>Steam Oyun Karşılaştırma</span>
        <div className="inputDiv">
          <input
            type="text"
            value={nick1}
            onChange={(e) => setNick1(e.target.value)}
          />
          <input
            type="text"
            value={nick2}
            onChange={(e) => setNick2(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Getir</button>
      </div>

      <div className="bottomDiv">
        {processStatus === 0 && (
          <span>İşlemleri başlatmak için butona tıklayın.</span>
        )}
        {processStatus === 1 && <span>Kullanıcıların Oyunları Alınıyor.</span>}
        {processStatus === 2 && <span>Oyunlar Filtreleniyor.</span>}
        {processStatus === 3 && <span>Oyun Detayları Çekiliyor.</span>}
        {processStatus === 4 && (
          <>
            <div className="gamesDiv">
              {sameGames.map(
                (e) =>
                  e.name && (
                    <div className="game" key={`'${e.steam_appid}'`}>
                      <a target="_blank" href={`https://store.steampowered.com/app/${e.steam_appid}`}>
                        <img src={e.header_image} alt="" />
                        <span>{e.name}</span>
                      </a>
                    </div>
                  )
              )}
            </div>
            <div></div>
          </>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;

  console.log(`key: ${apiKey}`);

  return {
    props: {
      apiKey: apiKey,
    },
  };
}
