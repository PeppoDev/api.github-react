import React, { useState } from "react";
import "./styles.css";
import apiGit from "../../services/apigit";

export default function New({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await apiGit(username).catch(error =>
      console.warn("Usuário não encontrado no GitHub")
    );
    if (!response) {
      alert("Usuário não existe!");
      history.push("/");
      return;
    }
    const usersString = localStorage.getItem("registeredUsers");
    const savedUsers = usersString != null ? JSON.parse(usersString) : [];
    for (const currentUser of savedUsers) {
      if (currentUser.username === username) {
        alert("Usuário já cadastrado!");
        history.push("/");
        return;
      }
    }
    savedUsers.push({ username, password });
    localStorage.setItem("registeredUsers", JSON.stringify(savedUsers));
    alert("Cadastrado com sucesso!");
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Digite seu Usuário"
          onChange={event => setUsername(event.target.value)}
        />
        <br />
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Digite sua Senha"
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <button className="btn" type="submit">
          Cadastrar!
        </button>
      </form>
    </>
  );
}
