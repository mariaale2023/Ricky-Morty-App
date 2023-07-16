import React from "react";

const Status = ({ setStatus, setPageNumber }) => {
  // const statusTypes = ["Alive", "Dead", "Unknown"];
  const onChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="dropdown ">
      <a
        className="btn btn-link dropdown-toggle link-filter"
        href={onChange}
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onChange={onChange}
        setStatus={setStatus}
        setPageNumber={setPageNumber}
      >
        Status
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a className="dropdown-item" href={onChange}>
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
            Unknown
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Status;
