import React from "react";
import ReactPaginate from "react-paginate";
import "./PageNumber.css";

const PageNumber = ({ info, pageNumber, setPageNumber }) => {
  // console.log(info.pages);
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="color-green"
      previousClassName="color-green"
      pageCount={info?.pages}
    />
  );
};

export default PageNumber;
