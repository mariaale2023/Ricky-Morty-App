import React from "react";
import ReactPaginate from "react-paginate";
import "./PageNumber.css";

const PageNumber = ({ info, pageNumber, setPageNumber }) => {
  // console.log(info.pages);
  return (
    <ReactPaginate
      color="#97ce4c"
      className="pagination justify-content-center gap-4 color-green"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="text-dark"
      previousClassName="text-dark"
      // pageClassName="bg-success text-dark"
      pageLinkClassName="bg-success text-dark bg-opacity-25"
      nextLinkClassName="bg-success text-white "
      previousLinkClassName="bg-success text-white"
      onPageChange={(data) => {
        // console.log(data.selected + 1);
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
      activeClassName="active"
      activeLinkClassName="bg-success text-white bg-opacity-75"
    />
  );
};

export default PageNumber;
