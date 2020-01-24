import { Router } from "express";
import API from "./services/apiGit";

const routes = Router();

routes.get("/users");
routes.post("/users", (req, res) => {
  API.getUser(req.body.username);
});

export default routes;
