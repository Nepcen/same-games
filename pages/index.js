"use client";
import { sleep } from "@/utils/sleep";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import InputArea from "@/components/InputArea";
import Games from "@/components/Games";
import { getUserId, getUserGames, getGameDetail } from "@/utils/getFuncs";

export default function Home() {
  const [nick1, setNick1] = useState();
  const [nick2, setNick2] = useState();
  const [sameGames, setSameGames] = useState([]);
  const [processStatus, setProcessStatus] = useState(0);

  const handleClick = async () => {
    if(!nick1 || !nick2) return
    
    setProcessStatus(1);
    const user1Id = await getUserId(nick1);

    if (!user1Id) {
      setProcessStatus(444);
      return;
    }

    const userGame1 = (await getUserGames(user1Id)).games;

    if (!userGame1) {
      setProcessStatus(445);
      return;
    }
    console.log(userGame1);

    const user2Id = await getUserId(nick2);

    if (!user2Id) {
      setProcessStatus(446);
      return;
    }

    const userGame2 = (await getUserGames(user2Id)).games;

    if (!userGame2) {
      setProcessStatus(447);
      return;
    }

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
    console.log("SGD");
    console.log(sameGamesDetails);
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

    await sleep(500);

    setProcessStatus(4);
    console.log("sıralı");
    console.log(sortedsameGamesDetails);
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
