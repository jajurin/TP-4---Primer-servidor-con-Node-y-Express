import express from "express";
import mostrarFecha from "./time.js";

const app = express();

app.get('/', (req, res) => {
  res.send("Hola");
});

app.get('/hora', (req, res) => {
  res.send(mostrarFecha().hora);
});

app.get('/fecha-completa', (req, res) => {
  res.send(mostrarFecha().fechaForm);
});

export default app;