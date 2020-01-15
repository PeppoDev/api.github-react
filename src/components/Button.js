import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, link, form, onClick, disabled }) {
  if (link) {
    return (
      <>
        <Link to={link}>
          <button
            className="btn"
            type="submit"
            form={form}
            onClick={onClick}
            disabled={disabled}
          >
            {text}
          </button>
        </Link>
      </>
    );
  } else {
    return (
      <button
        className="btn"
        type="submit"
        form={form}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
