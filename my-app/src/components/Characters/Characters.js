import React, { useEffect, useState } from "react";
import ListCharacters from "./ListCharacters";
import "./Characters.css";
import Pagination from "../Pagination/Pagination";
import PageNumber from "../Pagination/PageNumber";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const inicialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  const fetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      console.log(data); // Process the data as per your requirements
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  };

  const onPrevios = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, [inicialUrl]);

  return (
    <>
      <div className="container mt-5 list-characters">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />
        <ListCharacters characters={characters} />
      </div>
      <PageNumber
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default Characters;
