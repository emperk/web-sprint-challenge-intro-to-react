// Write your Character component here
import React from "react";
import Character from "./Character"
import "./Characters.css";

const Characters = (props) => {
  const { data, action } = props;
  console.log("data", data)
  return (
    <div className="charactersList">
      {data && data.map((character) => 
        <Character key={character.name} character={character}>
          <button onClick={() => action(data.character)}>
            More Info
          </button>
        </Character>
      )}
    </div>
  );
};

export default Characters;
