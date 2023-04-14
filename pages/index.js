import { useState } from "react";

export default function Home() {
  const apiKey = process.env.STEAM_API_KEY;
  console.log(apiKey);
  const [nick1, setNick1] = useState("");
  const [nick2, setNick2] = useState("");

  
  const getUserGame = async (username) => {
    // Kullanıcının profil ID'sini almak için Steam API'ye bir istek gönderin
    fetch(
      `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${apiKey}&vanityurl=${username}`,
      { mode: "no-cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.response.success === 1) {
          const steam_id = data.response.steamid;
          console.log(steam_id);

          // Kullanıcının sahip olduğu oyunların listesini almak için Steam API'ye bir istek gönderin
          fetch(
            `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steam_id}&format=json`,
            { mode: "no-cors" }
          )
            .then((response) => response.json())
            .then((data) => {
              //const games = data.response.games;
              //games.forEach((game) => console.log(game.name));
              const res = data.response.games;
              console.log(res);
              return res;
            })
            .catch((error) => console.error(error));
        } else {
          console.error("Kullanıcı adı geçersiz.");
        }
      })
      .catch((error) => console.error(error));
    return false;
  };

  const handleClick = () => {
    console.log(getUserGame(nick1));
  };

  return (
    <>
      <div>
        <div>
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
    </>
  );
}
