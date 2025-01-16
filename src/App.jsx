import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    let List = fetch("https://pokeapi.co/api/v2/")
      .then((result) => {
        return result.json();
      })
      .then((resolved) => {
        resolved;
      });

    console.log(List);
  }, []);

  return (
    <div className="main-div">
      <div className="static-div">
        <a className="static-title">Pokemon Memory Card</a>
        <a className="static-description">
          get points by clicking on an image but don't click on any more than
          once!
        </a>
      </div>
    </div>
  );
}

export default App;
