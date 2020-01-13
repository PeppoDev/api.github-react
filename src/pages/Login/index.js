import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usersString = localStorage.getItem("registeredUsers");
  const registeredUsers = usersString != null ? JSON.parse(usersString) : [];
  const credentials = registeredUsers.find(i => i.username === username);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username === "" || password === "") {
      alert("Por favor preencha todos os campos!");
      return;
    }

    if (!credentials) {
      alert("Usuário não encontrado. Por favor realize o cadastro!");
      return;
    }

    if (credentials.password === password) {
      console.log(`Usuário ${username} logado!`);
      localStorage.setItem("user", username);
      history.push("/dashboard");
    } else {
      alert("Senha incorreta!");
    }
  }
  return (
    <>
      <p className="textlogin">
        Um jeito <strong>fácil</strong> e <strong>rápido</strong> de acessar
        seus repositórios.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Digite seu Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        ></input>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>
        <button className="btn" type="submit">
          Entrar
        </button>
        <Link to="/New">
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </Link>
      </form>
    </>
  );
}
