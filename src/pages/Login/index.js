import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    localStorage.setItem("user", username);
    history.push("/dashboard");
  }
  return (
    <>
      <p className="textlogin">
        Um jeito <strong>fácil</strong> e <strong>rápido</strong> para acessar
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
