import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin-right: 10%;
  margin-left: 10%;
  padding: 16px 8px 12px 16px;
  background-color: whitesmoke;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
`

const Details = ({ character, close }) => {
  if (!character) return <h3>LOADING</h3>;
  return (
    <StyledDetails>
      <h3>Character Details: </h3>
      <div>Name: {character.name}</div>
      <div>Height: {character.height}</div>
      <div>Mass: {character.mass}</div>
      <div>Skin Color: {character.skin_color}</div>
      <div>Hair Color: {character.hair_color}</div>
      <div></div>
    </StyledDetails>
  );
};

export default Details;
