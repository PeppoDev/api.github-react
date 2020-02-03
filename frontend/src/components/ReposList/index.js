import React from "react";

//css
import "./styles.css";

function ReposList({ repo }) {
  return (
    <li className="repos-item">
      <header
        style={{ backgroundImage: `url(${repo.owner.avatar_url})` }}
      ></header>
      <div className="repos-content">
        <strong>
          <a className="repos-link" target="blank" href={repo.html_url}>
            {repo.name}
          </a>
        </strong>
        <p>
          {repo.language
            ? `Linguagem: ${repo.language}`
            : "Linguagem: Não cadastrada"}
        </p>
      </div>
    </li>
  );
}

export default ReposList;
