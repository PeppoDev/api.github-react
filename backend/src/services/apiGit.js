import axios from 'axios'

const apiGit = axios.create('api.github.com/users/')

const getUser = async (username) => {
    const response = await axios.get(user)
    console.log(response);
}

export default { getUser }