"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import InputArea from "@/components/InputArea";
import Games from "@/components/Games";
import { getUserId, getUserGames, getGameDetail } from "@/utils/getFuncs";

export default function Home() {
  const [nick1, setNick1] = useState("");
  const [nick2, setNick2] = useState("");
  const [sameGames, setSameGames] = useState([]);
  const [processStatus, setProcessStatus] = useState(0);

  const handleClick = async () => {
    if(!nick1 || !nick2) return
    
    setProcessStatus(1);
    const user1Id = await getUserId(nick1);

    if (user1Id == 'error' || !user1Id) {
      setProcessStatus(444);
      return;
    }

    let userGame1 = (await getUserGames(user1Id));

    if (userGame1 == 'error' || !userGame1) {
      setProcessStatus(445);
      return;
    }
    userGame1 = userGame1.games

    const user2Id = await getUserId(nick2);

    if (user2Id == 'error' || !user2Id) {
      setProcessStatus(444);
      return;
    }

    let userGame2 = (await getUserGames(user2Id));

    if (userGame2 == 'error' || !userGame2) {
      setProcessStatus(445);
      return;
    }
    userGame2 = userGame2.games

    setProcessStatus(2);

    const matchingGames = userGame1.filter((game1) => {
      return userGame2.some((game2) => game1.appid === game2.appid);
    });

    setProcessStatus(3);
    let sameGamesDetails = [];
    await Promise.all(
      matchingGames.map(async (e) => {
        const gameDetail = await getGameDetail(e.appid);
        sameGamesDetails.push(gameDetail);
      })
    );
    
    let sortedsameGamesDetails;
    await Promise.all(
      (sortedsameGamesDetails = sameGamesDetails.sort((x, y) => {
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      }))
    );

    setProcessStatus(4);
    setSameGames(sortedsameGamesDetails);
  };

  return (
    <>
      <TopBar />
      <InputArea nick1={nick1} setNick1={setNick1} nick2={nick2} setNick2={setNick2} handleClick={handleClick} />
      <Games processStatus={processStatus} sameGames={sameGames}/>
    </>
  );
}
