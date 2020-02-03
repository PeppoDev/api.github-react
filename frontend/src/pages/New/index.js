import React, { useState } from "react";
//services
import apiGit from "../../services/apigit";
//css
import "./styles.css";
//utils
import handleSubmit from "../../utils/handleSubmit";

export default function New({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const returnPage = _ => history.push("/");

  async function onCredentials(savedUsers) {
    const response = await apiGit(username).catch(error =>
      console.warn("Usuário não encontrado no GitHub")
    );
    if (!response) {
      alert("Usuário não existe!");
      return;
    }
    savedUsers.push({ username, password });
    localStorage.setItem("registeredUsers", JSON.stringify(savedUsers));
    alert("Cadastrado com sucesso!");
    history.push("/");
  }

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const usersString = localStorage.getItem("registeredUsers");
  //   const savedUsers = usersString != null ? JSON.parse(usersString) : [];
  //   const credentials = registeredUsers.find(
  //     user => user.username === username
  //   );
  //   if (username === "" || password === "") {
  //     alert("Por favor preencha todos os campos!");
  //     return;
  //   }
  //   if (credentials) {
  //     alert("Usuário já cadastrado");
  //   }
  //   if (!credentials) {
  //     handleRegister(savedUsers);
  //   }
  // };

  return (
    <>
      <p>Tela de Cadastro</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Digite seu Username"
          onChange={event => setUsername(event.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Digite sua Senha"
          onChange={event => setPassword(event.target.value)}
        />

        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
      <button className="btn" type="submit" onClick={returnPage}>
        Voltar
      </button>
    </>
  );
}
