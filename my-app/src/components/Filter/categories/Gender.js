import React from "react";

const Gender = () => {
  return (
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
            Unknown
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Gender;
