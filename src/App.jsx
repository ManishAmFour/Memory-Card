import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result } from "lodash";
import { configuringTheData } from "./ImageArray";

function App() {
  useEffect(() => {
    async function configureFunc() {
      let ImageUrl = await configuringTheData();
      console.log(ImageUrl.sprites.front_default);
    }
    configureFunc();
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
