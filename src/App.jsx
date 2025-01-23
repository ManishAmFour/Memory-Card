import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result, set } from "lodash";
import { FetchingTheData } from "./ImageArray";
import { uniqueRandomNumArrayGenerator } from "./uniqueRandomGen";
import { verificationFunction, calculateBestScore } from "./verification";

function ImageInteraction({ array, setScoreComp, setBestScoreComp }) {
  const [ModifiedArray, setArray] = useState(array);
  const [clickedImages, setClickedImages] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  function ModifyingTheArray(image) {
    let NewArray = uniqueRandomNumArrayGenerator(ModifiedArray);
    setArray(NewArray);
    setCurrentScore(verificationFunction(image, clickedImages));
    setClickedImages(clickedImages);
  }

  useEffect(() => {
    setScoreComp(currentScore);
    setBestScoreComp(calculateBestScore(currentScore));
  }, [ModifiedArray]);

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
  const [score, setScore] = useState();
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    FetchingTheData().then((MainArray) => {
      setImagesFilledArray(MainArray);
    });
  }, []);

  return (
    <div className="main-div">
      <div className="score-info">
        <a>
          Score:- <span className="current-score">{score}</span>
        </a>
        <a>
          Best Score:- <span className="best-score">{bestScore}</span>
        </a>
      </div>
      <div className="static-div">
        <a className="static-title">Pokemon Memory Card</a>

        <a className="static-description">
          get points by clicking on the pokemon image below but don't click on
          any more than once!
        </a>
        {imagesFilledArray ? (
          <div className="pokemon-container">
            <ImageInteraction
              setScoreComp={setScore}
              setBestScoreComp={setBestScore}
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
