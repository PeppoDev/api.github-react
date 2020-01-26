import axios from "axios";

const apiGit = axios.create({
  baseURL: "https://api.github.com/users/"
});

const getUser = async username => await apiGit.get(username);
const getRepos = async username => await apiGit.get(username + "/repos");

export default { getUser, getRepos };
