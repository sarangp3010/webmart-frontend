import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

import { withRouter } from "../withRouter/withRouter";
 
const Pagination: React.FC<any> = ({
  setFilter,
  ItemsComponent,
  pageCount,
  dispatchAction,
  filter,
  navigate,
  location,
  page,
  setPage,
  setFilterBy,
}) => {
  const itemsPerPage = 10

  const handlePageClick = (event: { selected: number }) => {
    setPage && setPage(event.selected + 1);
    navigate(location.pathname, {
      page: event.selected + 1,
    });
  };

  useEffect(() => {
    dispatchAction && dispatchAction(page || 1);
  }, [page, filter]);

  useEffect(() => {
    if (page && page > Math.ceil(pageCount / itemsPerPage) && pageCount) {
      setPage && setPage(() => page && page - 1);
      navigate(location.pathname, { page: page - 1 });
    }
  }, [Math.ceil(pageCount / itemsPerPage)]);

  return (
    <div className="p-3">
      <div className="pagination-container">
        <ItemsComponent
          setFilter={setFilter}
          filter={filter}
          getAction={dispatchAction}
          setFilterBy={setFilterBy}
        />

        <div
          className={`d-flex mt-3 ${
            pageCount === 0 ? "justify-content-end" : "justify-content-between"
          }`}
        >
          {!(pageCount === 0) && (
            <div className="col-sm-12 col-md-5">
              <div
                className="mt-1 font-size-14"
                role="status"
                aria-live="polite"
              >
                Showing{" "}
                {Number(page) === 1 ? 1 : (Number(page) - 1) * itemsPerPage + 1}{" "}
                to {Math.min(Number(page) * itemsPerPage, pageCount)} of{" "}
                {pageCount} entries
              </div>
            </div>
          )}
          <ReactPaginate
            nextLabel={"Next"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={Math.ceil(pageCount / itemsPerPage) || 1}
            previousLabel={"Previous"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            forcePage={page && page > 1 ? page - 1 : 0}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            marginPagesDisplayed={4}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Pagination);
