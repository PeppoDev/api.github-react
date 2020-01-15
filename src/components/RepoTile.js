import React from "react";

export default function RepoTile({ id, owner, html_url, name, language }) {
  return (
    <li className="repos-item" key={id}>
      <header style={{ backgroundImage: `url(${owner.avatar_url})` }} />
      <div className="repos-content" key={id}>
        <strong>
          <a className="repos-link" target="blank" href={html_url} key={id}>
            {name}
          </a>
        </strong>
        <p key={id}>
          {language ? `Linguagem: ${language}` : "Linguagem: Não cadastrada"}
        </p>
      </div>
    </li>
  );
}
