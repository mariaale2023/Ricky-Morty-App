import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route exact path="/">
        <Home characters={characters} isLoading={isLoading} />
      </Route>
      <Route path="/character/:id">
        <CharacterDetails characters={characters} isLoading={isLoading} />
      </Route>
    </Routes>
  );
};

export default App;
