import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import {
  PaginatorContainer,
  PaginatorList,
  PaginatorLink,
} from "./Paginator.styled.js";

const Paginator = ({ totalRecipesCount }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const itemsPerPage = 4;
  const pageCount = Math.ceil(totalRecipesCount / itemsPerPage);

  return (
    <PaginatorContainer>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        disableInitialCallback={true}
        forcePage={currentPage}
        pageLinkClassName="pagination-link"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
      />

      <PaginatorList>
        <PaginatorLink
          href="/"
          className="pagination-previous"
          onClick={() => handlePageClick({ selected: currentPage - 1 })}
        >
          {"<"}
        </PaginatorLink>
        {[1, 2, 3, 4].map((pageNumber) => (
          <PaginatorLink
            key={pageNumber}
            href="/"
            isActive={pageNumber - 1 === currentPage}
            onClick={() => handlePageClick({ selected: pageNumber - 1 })}
          >
            {pageNumber}
          </PaginatorLink>
        ))}
        <PaginatorLink
          href="/"
          className="pagination-next"
          onClick={() => handlePageClick({ selected: currentPage + 1 })}
        >
          {">"}
        </PaginatorLink>
      </PaginatorList>
    </PaginatorContainer>
  );
};

export default Paginator;
