import React from "react";
import "./App.css";
import logo from "./assets/octocat-white.png";
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <div className="colorcompletetop"></div>
      <div className="tittlebar">
        <img src={logo} alt="" className="logo" />
        <h2 className="tittle">API - GitHub</h2>
      </div>
      <div className="colorcompletebot"></div>

      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
