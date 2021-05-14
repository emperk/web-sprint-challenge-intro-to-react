// Write your Character component here

import React from "react";
import "./Character.css";
import Details from './Details'
import styled from "styled-components";

const StyledCharacter = styled.div`
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin: 5px 16px 5px 16px;
  padding: 16px 8px 12px 16px;
  background-color: whitesmoke;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
`;

const Character = (props) => {
  const { character, action, selectedCharacterName, closeDetails } = props;
  console.log("here is the character", character);
  return (
    <>
      <StyledCharacter className="character">
        <span className="name">{character.name}</span>
        <button onClick={() => action(character.name)}>More Info</button>
      </StyledCharacter>
      {selectedCharacterName === character.name && (
        <Details
          character={character}
          close={closeDetails}
        />
      )}
    </>
  );
};

export default Character;
