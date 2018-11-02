import express from "express";
import { config } from "configuration";

const app = express();

app.get("/", (req, res) => {
  req.myProperty = "someProp";
  console.log(req.myProperty);
});

app.listen(3000, () => {
  const works = config.works;
  console.log("started", works);
});
