import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ prev, next, onPrevios, onNext }) => {
  const handlePrevios = () => {
    onPrevios();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination">
        {prev ? (
          <li className="page-item">
            <Button
              className="page-link btn btn-success"
              onClick={handlePrevios}
            >
              Previus
            </Button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <Button className="page-link btn btn-success" onClick={handleNext}>
              Next...
            </Button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
