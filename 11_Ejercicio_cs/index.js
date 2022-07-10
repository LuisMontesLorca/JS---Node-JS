const axios = require("axios");
const { writeFile } = require("fs");
const fs = require('fs').promises;  // permite trabajar de forma asincrona, con promises, trae fs con al funcionalidad de promesa
const path = require('path')

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character"); // axios devuelve una respuesta de ese servidor api
  let {
    data: { results },
  } = response;
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(", "))
    .join('\n')

  await fs.writeFile(path.join(__dirname, "data.scv"), characters);
 // console.log(path.join(__dirname, "data.scv"));
  //console.log(characters);
};

main();
