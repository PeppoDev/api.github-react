import React, { useState } from "react";
import "./styles.css";
import { InputBox, Button } from "../../components/";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usersString = localStorage.getItem("registeredUsers");
  const registeredUsers = usersString != null ? JSON.parse(usersString) : [];
  const credentials = registeredUsers.find(user => user.username === username);

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
        <InputBox
          name="username"
          type="text"
          varible={username}
          callback={setUsername}
        />
        <InputBox
          name="password"
          type="password"
          variable={password}
          callback={setPassword}
        />
        <Button text="Entrar" />
      </form>
      <Button text="Cadastrar" link="/New" />
    </>
  );
}
