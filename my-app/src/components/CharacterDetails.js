import React from "react";
import { useParams } from "react-router-dom";

function CharacterDetails({ characters, isLoading }) {
  const { id } = useParams();
  const character = characters.find(
    (character) => character.id === parseInt(id)
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : character ? (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ) : (
        <p>Character not found.</p>
      )}
    </div>
  );
}

export default CharacterDetails;
