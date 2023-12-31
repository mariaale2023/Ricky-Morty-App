import React, { useEffect, useState } from "react";

import Logo from "../../images/tt.png";

import ListCharacters from "./ListCharacters";
import "./Characters.css";
import Pagination from "../Pagination/Pagination";
import PageNumber from "../Pagination/PageNumber";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const [search, setSearch] = useState("");
  // const [searchByStatus, setSearchByStatus] = useState("");
  const [status, setStatus] = useState("");

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const inicialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;

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
      <h1 className="title-page">Wikipedia</h1>
      <a className="logo-box" href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <Search
        setSearch={setSearch}
        setPageNumber={setPageNumber}
        // setSearchByStatus={setSearchByStatus}
      />
      <Filter setStatus={setStatus} setPageNumber={setPageNumber} />
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
