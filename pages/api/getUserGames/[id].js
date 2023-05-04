export default async function handler(req, res) {
  if (req.method == "GET") {
    const apiKey = process.env.STEAM_API_KEY;
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${req.query.id}&format=json`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      res.status(200).json({ data: data.response });
    } catch (error) {
      res.status(400).json({ data: "error" });
    }
  } else {
    res.status(400).json({ data: "error" });
  }
}
