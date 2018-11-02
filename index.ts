import express from "express";

const app = express();

app.get("/", (req, res) => {
  req.myProperty = "someProp";
  console.log(req.myProperty);
});

app.listen(3000, () => {
  console.log("started");
});
