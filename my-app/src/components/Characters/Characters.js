import React from "react";

const Characters = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      console.log(data.results); // Process the data as per your requirements
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  return <></>;
};

export default Characters;
