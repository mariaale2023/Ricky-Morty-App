import React from "react";
import Gender from "./categories/Gender";
import Status from "./categories/Status";
import Species from "./categories/Species";
import "./Filter.css";

const Filter = ({ setStatus, setPageNumber }) => {
  return (
    <section className="filter-seccion text-center">
      <div className="filter-grid">
        <Gender />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species />
      </div>
    </section>
  );
};

export default Filter;
