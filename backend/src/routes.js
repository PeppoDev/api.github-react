import { Router } from 'express';
import { getUser } from './services/apiGit'


const routes = Router();

routes.get("/users");
routes.post("/users", (req, res) => {
    getUser(req.body.username)
});

export default routes;

