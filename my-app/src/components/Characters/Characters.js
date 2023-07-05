import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const inicialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      console.log(data.results); // Process the data as per your requirements
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, []);

  return <></>;
};

export default Characters;
