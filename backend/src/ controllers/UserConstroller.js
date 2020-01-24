import { getUser } from "./services/apiGit";
import User from "./models/User";

module.exports = {
    async Store(request, response) {
        const { github_username, password } = response.data;

    }


};
