import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import axios from "axios";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const inputRef = useRef(null);

  const getRandomPhoto = () => {
    axios
      .post("http://localhost:3001/random/photo", {
        query: inputRef.current.value,
      })
      .then(function (response) {
        setBackgroundImage(response.data.urls.full);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={backgroundImage || logo} className="background" alt="logo" />
        <div className="input-container">
          <input
            className="query-input"
            ref={inputRef}
            type="text"
            placeholder="Enter a category or query to change the background photo"
          />
          <button
            className="submit-button"
            onClick={() => {
              getRandomPhoto();
            }}
          >
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
