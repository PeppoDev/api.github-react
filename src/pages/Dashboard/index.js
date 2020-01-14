import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <ul className="repos-list">
        {repos
          .slice(paginateData.startIndex, paginateData.endIndex + 1)
          .map(repos => (
            <li className="repos-item" key={repos.id}>
              <header
                style={{ backgroundImage: `url(${repos.owner.avatar_url})` }}
              ></header>
              <div className="repos-content">
                <strong>
                  <a
                    className="repos-link"
                    target="blank"
                    href={repos.html_url}
                  >
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
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  className="btn"
                  type="submit"
                  onClick={() => {
                    setPage(page - 1);
                    paginateData = paginate(repos.length, page, 6);
                  }}
                  disabled={page === paginateData.startPage}
                >
                  Anterior
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  type="submit"
                  onClick={() => {
                    setPage(page + 1);
                    paginateData = paginate(repos.length, page, 6);
                  }}
                  disabled={page === paginateData.endPage}
                >
                  Próximo
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      <Link to="/">
        <button className="btn" type="submit" onClick={exitPage}>
          Sair
        </button>
      </Link>
    </>
  );
}
