export default async function handler(req, res) {
  if (req.method == "GET") {
    const url = `https://store.steampowered.com/api/appdetails?appids=${req.query.id}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      if (data[req.query.id].success) {
        res.status(200).json({ data: data[req.query.id].data });
      } else {
        res.status(400).json({ data: "error" });
      }
    } catch (error) {
      res.status(400).json({ data: "error" });
    }
  } else {
    res.status(400).json({ data: "error" });
  }
}
