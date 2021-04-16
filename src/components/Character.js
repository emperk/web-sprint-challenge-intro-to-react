import React from "react";
import "./Character.css";

const Character = (props) => {
  const { character } = props;
  console.log("character", character)
  return (
    <div className="character">
        <span className="name">{character.name}</span>
    </div>
  );
};

export default Character;