import express from "express";
import { getAllNotes, getSingle } from "../controllers/todosController";
const todosRouter = express.Router();

todosRouter.get("/all", getAllNotes);
todosRouter.get("/single", getSingle);
todosRouter.post(
  "/add"
  // TODO ASSIGN FUNCTION
);
export default todosRouter;
