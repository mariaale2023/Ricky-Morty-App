import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <section className="filter-seccion text-center">
      <div className="filter-grid">
        <div className="dropdown ">
          <a
            className="btn btn-link dropdown-toggle link-filter"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gender
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="/">
                Female
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Male
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Genderless
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Unknow
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown ">
          <a
            className="btn btn-link dropdown-toggle link-filter"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="/">
                Alive
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Dead
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Unknow
              </a>
            </li>
          </ul>
        </div>
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
                Unknow
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Unknow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filter;
