// import { Card, Button } from "react-bootstrap";
import "./ListCharacters.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ListCharters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minwidth: "20rem" }}>
            <img
              src={character.image}
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.status}</p>
              <p className="card-text">{character.species}</p>
              <p className="card-text">{character.location.name}</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCharters;
