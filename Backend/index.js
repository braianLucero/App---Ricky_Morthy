let data = require("./src/utils/data");
const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("rickandmorty/character/")) {
      let id = url.split("/").at(-1);
      let character = data.find((char) => char.id == id);

      if (character) {
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "content-type": "application/json" });
        return res.end(JSON.stringify({ error: "No hay datos" }));
      }
    }
  })
  .listen(3001, "localhost");
