import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, RepoTile } from "../../components";
import apiGit from "../../services/apigit";
import "./styles.css";
import paginate from "jw-paginate";

export default function Dashboard({ history }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  let paginateData = paginate(repos.length, page, 5);

  const exitPage = () => localStorage.setItem("user", undefined);

  useEffect(() => {
    async function loadRepo() {
      const user = localStorage.getItem("user");
      const response = await apiGit.get(user + "/repos", {});
      const data = response.data;
      setRepos(data);
    }
    loadRepo();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    paginateData = paginate(repos.length, page, 5);
  }, [page]);

  return (
    <>
      <ul className="repos-list">
        {repos
          .slice(paginateData.startIndex, paginateData.endIndex + 1)
          .map(repoData => RepoTile(repoData))}
      </ul>
      <div className="pagination">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === paginateData.startPage}
          key="backwards"
        >
          Anterior
        </Button>
        <div style={{ width: "5px" }} />
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === paginateData.endPage}
          key="forwards"
        >
          Próximo
        </Button>
      </div>
      <Link to="/">
        <Button onClick={exitPage}>Sair</Button>
      </Link>
    </>
  );
}
