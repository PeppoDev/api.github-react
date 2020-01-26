import { Router } from "express";
import UserController from "./ controllers/UserController";
import RepoController from "./ controllers/RepoController";

const routes = Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/repos", RepoController.index);

export default routes;
