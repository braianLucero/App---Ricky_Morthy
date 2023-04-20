const axios = require("axios");

export default function getCharById(res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((respuesta) => respuesta.dato)
    .then((dato) => {
      let objeto = {
        // id: dato.id,
        // name: dato.name,
        // gender: dato.gende,
        // species: dato.species,
        // origin: dato.origin.name,
        // image: dato.image,
        // status: dato.status,
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(objeto));
    })
    .cath((err) => {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(err.message);
    });
}
