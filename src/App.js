import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";
import Details from "./components/Details";
import styled from "styled-components";

const star_url = `https://swapi.dev/api/people`;

const StyledCharacter = styled.div`
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
  background-color: whitesmoke;
  opacity: 0.8;
`;

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
  };

  const closeDetails = () => {
    setSelectedCharacterName("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(star_url)
        .then((response) => console.log("response", response) || response.data)
        .catch((err) => console.log(err));

      setData(result);
    };

    fetchData();
  }, []);

  console.log("data1", data);
  return (
    <div className="App">
      <StyledCharacter>
        <h1 className="Header">Characters</h1>
      </StyledCharacter>
      <Characters data={data} action={openDetails} />
      <Details
        characterName={selectedCharacterName}
        data={data}
        close={closeDetails}
      />
    </div>
  );
};

export default App;
