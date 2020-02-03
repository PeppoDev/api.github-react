import React, { useState } from "react";
//css
import "./styles.css";
//componentes
import ButtonT from "../ButtonT";
//utils
import handleSubmit from "../../utils/handleSubmit";

function UserFormLogin({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onCredentials(credentials) {
    if (credentials.password === password) {
      console.log(`Usuário ${username} logado!`);
      localStorage.setItem("user", username);
      history.push("/dashboard");
    } else {
      alert("Senha ou Usuário incorreto(a)!");
    }
  }
  function onNCredentials(credentials) {
    alert(`O Usuário ${credentials.username} não está cadastrado`);
  }

  return (
    <form>
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

      <ButtonT
        to=""
        text="Entrar"
        onClick={event =>
          handleSubmit(onCredentials, onNCredentials, username, password, event)
        }
      />
      <ButtonT to="New" text="Cadastrar" />
    </form>
  );
}

export default UserFormLogin;
