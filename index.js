import express from "express";
import todosRouter from "./routes/todosRoute.js";
const app = express();
app.use("/todos", todosRouter);

app.listen(4000, (req, res) => {
  console.log("Running 👍😊 on : http://localhost:4000");
});
