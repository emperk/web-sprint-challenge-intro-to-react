import React from "react";

const Details = ({ data = [], characterName, close }) => {
  console.log('data', data)
  console.log('name', characterName)
  const characterList = data && data.filter(character => character.name === characterName);
  const character = characterList[0]
  console.log('character', character)

  return character && (
    <div>
      <span>{character.name}</span>
    </div>
  );
};

export default Details