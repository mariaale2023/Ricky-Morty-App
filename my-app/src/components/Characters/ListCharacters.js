// import { Card, Button } from "react-bootstrap";
import "./ListCharacters.css";

const ListCharters = ({ characters }) => {
  return (
    <div className="row">
      <div className="col">
        {characters.map((character, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
            </div>
          </div>

          // <Card>
          //   <Card.Img variant="top" src={character.image} />
          //   <Card.Body>
          //     <Card.Title>{character.name}</Card.Title>
          //     <Card.Text>Status: {character.status}</Card.Text>
          //     <Card.Text>Species: {character.species}</Card.Text>
          //     {/* Add more card details as needed */}
          //     <Button variant="primary">Learn More</Button>
          //   </Card.Body>
          // </Card>
        ))}
      </div>
    </div>
  );
};

export default ListCharters;
