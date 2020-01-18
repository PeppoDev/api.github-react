import React from "react";

export default function InputBox({ name, type, variable, callback }) {
  const capitalize = s => s.slice(0, 1).toUpperCase() + s.slice(1);
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}</label>
      <input
        type={type}
        id={name}
        placeholder={`Digite seu ${capitalize(name)}`}
        value={variable}
        onChange={event => callback(event.target.value)}
      />
    </>
  );
}
