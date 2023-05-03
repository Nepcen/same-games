const apiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;

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
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${userId}&format=json`;
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

export {getUserId, getUserGames, getGameDetail}