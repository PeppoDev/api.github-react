import React from "react";

export default function Button({ children, onClick, disabled }) {
  return (
    <button className="btn" type="submit" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
