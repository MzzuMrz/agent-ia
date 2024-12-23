const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", routes); // Usa las rutas correctamente

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
