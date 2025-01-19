import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result } from "lodash";

function App() {
  const imageArray = ["", "", "", "", "", "", "", "", "", ""];

  useEffect(() => {
    imageArray.forEach((image, index) => {
      fetch(
        "https://api.giphy.com/v2/emoji?api_key=DETaKDuNib9pdzCK2Qa5lNcaO3OeatCl&limit=10&offset=0"
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          imageArray[index] = `${result.data[index].url}`;
        });
    });
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
