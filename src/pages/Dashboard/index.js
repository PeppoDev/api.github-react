import React, { useEffect, useState } from "react";
import apiGit from "../../services/apigit";
import "./styles.css";

export default function Dashboard({ history }) {
  const [repos, setRepos] = useState([]);
  const exitPage = _ => {
    localStorage.setItem("user", undefined);
    history.push("/");
  };

  useEffect(() => {
    async function loadRepo() {
      const user = localStorage.getItem("user");
      const response = await apiGit.get(user + "/repos", {});
      const data = response.data;
      setRepos(data);
    }
    loadRepo();
  }, []);

  return (
    <>
      <ul className="repos-list">
        {repos.map(repos => (
          <li className="repos-item" key={repos.id}>
            <header
              style={{ backgroundImage: `url(${repos.owner.avatar_url})` }}
            ></header>
            <div className="repos-content">
              <strong>
                <a className="repos-link" target="blank" href={repos.html_url}>
                  {repos.name}
                </a>
              </strong>
              <p>
                {repos.language
                  ? `Linguagem: ${repos.language}`
                  : "Linguagem: Não cadastrada"}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn" type="submit" onClick={exitPage}>
        Sair
      </button>
    </>
  );
}
