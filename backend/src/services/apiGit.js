import axios from "axios";

const apiGit = axios.create({
  baseURL: "https://api.github.com/users/"
});

const getUser = async username => {
  const userData = await apiGit.get(username);
  console.log(userData);
  return userData;
};

export default { getUser };
