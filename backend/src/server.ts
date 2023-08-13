import express from "express";

const HOSTNAME = "0.0.0.0";
const PORT = 8000;
const HOST = `${HOSTNAME}:${PORT}`;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, HOSTNAME, () => console.log(`start server at ${HOST}`));
