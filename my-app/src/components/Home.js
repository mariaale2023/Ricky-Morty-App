import React from "react";
import { Link } from "react-router-dom";

function Home({ characters, isLoading }) {
  return (
    <div>
      <h1>Rick and Morty Wikipedia</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
