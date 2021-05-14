import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters";
import Details from "./components/Details";
import styled from "styled-components";

const starWars_url = `https://swapi.dev/api/people/`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [selectedCharacterName, setSelectedCharacterName] = useState(
    "Luke Skywalker"
  );

  const openDetails = (name) => {
    setSelectedCharacterName(name);
  }

  const closeDetails = () => {
    setSelectedCharacterName("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(starWars_url)
        .then((response) => console.log("HERE IS THE RESPONSE: ", response) || response.data)
        .catch((error) => console.log("HERE IS THE ERROR: ", error));

      setData(result);
    };

    fetchData();
  }, []);

  console.log("some data", data);

  return (
    <div className="App">
      <div>
        <h1 className="Header">Characters</h1>
      </div>
    </div>
  );
}

export default App;
