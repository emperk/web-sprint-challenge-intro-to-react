import React from "react";
import "./Character.css";

const Character = (props) => {
  const { character, action } = props;
  console.log("character", character)
  return (
    <div className="character">
        <span className="name">{character.name}</span>
        <button onClick={() => action(character.name)}>
            More Info
        </button>
    </div>
  );
};

export default Character;