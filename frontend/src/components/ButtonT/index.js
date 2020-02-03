import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function ButtonT({ to, onClick, text }) {
  return (
    <Link to={to}>
      <button className="btn" type="submit" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
}

export default ButtonT;
