// import { Card, Button } from "react-bootstrap";
import "./ListCharacters.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ListCharters = ({ characters }) => {
  const getStatusBadgeColor = (status) => {
    if (status === "Alive") {
      return "bg-success";
    } else if (status === "Dead") {
      return "bg-danger";
    } else {
      return "bg-warning";
    }
  };

  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col mb-4 position-relative">
          <div className="card">
            <img
              src={character.image}
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h4 className="card-title">{character.name}</h4>
              <p className="card-text">{character.species}</p>
              <p className="card-text location">{character.location.name}</p>
              {/* <a href="/" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div
            className={`position-absolute badge ${getStatusBadgeColor(
              character.status
            )}`}
          >
            {character.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCharters;
