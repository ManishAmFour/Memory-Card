import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { result, set } from "lodash";
import { FetchingTheData } from "./ImageArray";

function ImageInteraction({ array }) {
  const [ModifiedArray, setArray] = useState(array);

  function ModifyingTheArray() {}

  return ModifiedArray.map((image, index) => {
    return (
      <img
        onClick={() => {
          ModifyingTheArray();
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

  useEffect(() => {
    FetchingTheData().then((MainArray) => {
      setImagesFilledArray(MainArray);
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
        {imagesFilledArray ? (
          <div className="pokemon-container">
            <ImageInteraction array={imagesFilledArray} />
          </div>
        ) : (
          <div>Still Loading</div>
        )}
      </div>
    </div>
  );
}

export default App;
