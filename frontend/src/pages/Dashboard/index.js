import React, { useEffect, useState } from "react";
import apiGit from "../../services/apigit";

//css
import "./styles.css";

//components
import ReposList from "../../components/ReposList";
import ButtonT from "../../components/ButtonT";

export default function Dashboard({ history }) {
  const [repos, setRepos] = useState([]);

  function exitPage() {
    localStorage.setItem("user", undefined);
  }

  useEffect(() => {
    async function loadRepo() {
      const user = localStorage.getItem("user");
      const response = await apiGit.get(`${user}/repos`, {});
      const data = response.data;
      setRepos(data);
    }
    loadRepo();
  }, []);

  return (
    <>
      <ul className="repos-list">
        {repos.map(repo => (
          <ReposList key={repo.id} repo={repo} />
        ))}
      </ul>
      <ButtonT to="/" onClick={exitPage} text="Sair" />
    </>
  );
}
