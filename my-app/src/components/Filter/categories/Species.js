import React from "react";

const Species = () => {
  return (
    <div className="dropdown">
      <a
        className="btn btn-link dropdown-toggle link-filter"
        href="/"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Species
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a className="dropdown-item" href="/">
            Human
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Alien
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Genderless
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Robot
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Animal
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Mythological Creature
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Disease
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Poopybutthole
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Cronenberg
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Unknown
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Species;
