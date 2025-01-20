import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result } from "lodash";
import { FetchingTheData } from "./ImageArray";

function App() {
  const [imagesFilledArray, setImagesFilledArray] = useState([]);

  useEffect(() => {
    let prevArray = imagesFilledArray;

    if (prevArray === imagesFilledArray) {
      FetchingTheData().then((response) => {
        setImagesFilledArray(response);
        prevArray = response;
      });
    }
  }, [imagesFilledArray]);

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
