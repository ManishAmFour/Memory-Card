import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result, set } from "lodash";
import { FetchingTheData } from "./ImageArray";
import { uniqueRandomNumArrayGenerator } from "./uniqueRandomGen";
import { verificationFunction } from "./verification";

function ImageInteraction({ array, parentComp }) {
  const [ModifiedArray, setArray] = useState(array);
  const [clickedImages, setClickedImages] = useState(0);
  function ModifyingTheArray(image) {
    let NewArray = uniqueRandomNumArrayGenerator(ModifiedArray);
    setArray(NewArray);
    parentComp(false);
    verificationFunction(image, clickedImages);
    setClickedImages(clickedImages);
  }

  return ModifiedArray.map((image, index) => {
    return (
      <img
        onClick={() => {
          ModifyingTheArray(image);
        }}
        className="pokemon-images"
        key={index}
        src={image}
      />
    );
  });
}

function App() {
  const [imagesFilledArray, setImagesFilledArray] = useState(false);
  const [alterTheArray, setAlterTheArray] = useState(true);
  useEffect(() => {
    FetchingTheData().then((MainArray) => {
      setImagesFilledArray(MainArray);
    });
  }, []);

  return (
    <div className="main-div">
      <div className="score-info">
        <a>
          Score:- <span className="current-score"></span>
        </a>
        <a>
          Best Score:- <span className="best-score"></span>
        </a>
      </div>
      <div className="static-div">
        <a className="static-title">Pokemon Memory Card</a>

        <a className="static-description">
          get points by clicking on an image but don't click on any more than
          once!
        </a>
        {imagesFilledArray ? (
          <div className="pokemon-container">
            <ImageInteraction
              parentComp={setAlterTheArray}
              array={imagesFilledArray}
            />
          </div>
        ) : (
          <div>Still Loading</div>
        )}
      </div>
    </div>
  );
}

export default App;
