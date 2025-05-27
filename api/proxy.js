export default async function handler(req, res) {
  const { url = "" } = req.query;
  if (!url) {
    return res.status(400).json({ error: "Missing url param" });
  }

  const apiUrl = `https://api.deezer.com${url.startsWith("/") ? url : "/" + url}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Proxy error" });
  }
}
