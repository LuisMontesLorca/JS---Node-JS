const express = require("express");

const Service = require("./src/service");

const app = express();
const port = 3000;

app.use(express.json()); // permite recibir datos de tipo json desde nuestros clientes

app.get("/", (req, res) => {
  // request es la peticion que hace el cliente y el response es la respuesta enviada
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  // request es la peticion que hace el cliente y el response es la respuesta enviada
  let {
    params: { id },
  } = req;
  let user = Service.getUsers(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.put("/:id", (req, res) => {
  // request es la peticion que hace el cliente y el response es la respuesta enviada
});

app.delete("/:id", (req, res) => {
  // request es la peticion que hace el cliente y el response es la respuesta enviada
});

app.post("/", (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);
  res.status(201).json({
    message: "Usuario creado",
    body: user,
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
