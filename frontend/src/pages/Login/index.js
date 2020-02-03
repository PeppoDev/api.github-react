import React from "react";

//css
import "./styles.css";
//components

import UserFormLogin from "../../components/UserFormLogin";

export default function Login({ history }) {
  return (
    <>
      <p className="textlogin">
        Um jeito <strong>fácil</strong> e <strong>rápido</strong> de acessar
        seus repositórios.
      </p>
      <UserFormLogin history={history} />
    </>
  );
}
