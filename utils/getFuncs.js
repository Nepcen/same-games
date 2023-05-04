const fetchURL = process.env.NEXT_PUBLIC_FETCH_DOMAIN;

const getUserId = async (username) => {
  const url = `/api/getUserId/${username}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data.data;
  } catch (error) {
    return null;
  }
};

const getUserGames = async (userId) => {
  const url = `/api/getUserGames/${userId}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data.data;
  } catch (error) {
    return null;
  }
};

const getGameDetail = async (gameId) => {
  const url = `/api/getGameDetail/${gameId}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    if(data != 'error'){
      return data.data;
    }else{
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {getUserId, getUserGames, getGameDetail}