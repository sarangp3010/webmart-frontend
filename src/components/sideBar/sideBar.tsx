const SideBar = () => {
  return (
    <div className="sidebar">
      <pre className="fs-2">Filters:</pre>
      <div className="price-filter-section mb-4 ms-3">
        <pre className="fs-4">Price</pre>

        <div className="price-filter mb-5 ms-3">
          <label className="float-start">Min:</label>
          <label className="float-end">Max:</label>

          <br />

          <input
            className="float-start"
            type="number"
            id="price-min"
            name="price-min"
            min="10"
            max="1000"
            step="1"
          />
          <input
            className="float-end"
            type="number"
            id="price-max"
            name="price-max"
            min="10"
            max="1000"
            step="1"
          />
        </div>
        <button className="btn btn-primary ms-3">Apply</button>
      </div>

      <hr />

      <div className="category-filter-section mb-4 ms-3">
        <pre className="fs-4 mb-2">Category</pre>

        <div
          className="btn-group-vertical ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="category"
            id="category-1"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="category-1"
            style={{ maxWidth: "100px" }}
          >
            Electronics
          </label>

          <input
            type="radio"
            className="btn-check"
            name="category"
            id="category-2"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="category-2"
            style={{ maxWidth: "100px" }}
          >
            Furniture
          </label>

          <input
            type="radio"
            className="btn-check"
            name="category"
            id="category-3"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="category-3"
            style={{ maxWidth: "100px" }}
          >
            Clothing
          </label>
        </div>
      </div>

      <hr />

      <div className="type-filter-section mb-4 ms-3">
        <pre className="fs-4 mb-2">Type</pre>

        <div
          className="btn-group-vertical ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="type"
            id="type-1"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="type-1"
            style={{ minWidth: "100px" }}
          >
            New
          </label>

          <input
            type="radio"
            className="btn-check"
            name="type"
            id="type-2"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="type-2"
            style={{ maxWidth: "100px" }}
          >
            Used
          </label>
        </div>
      </div>

      <hr />

      <pre className="fs-2">Sort:</pre>
      <div className="price-filter-section mb-4 ms-3">
        <div
          className="btn-group-vertical ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="sort"
            id="sort-1"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="sort-1"
            style={{ minWidth: "100px" }}
          >
            A - Z
          </label>

          <input
            type="radio"
            className="btn-check"
            name="sort"
            id="sort-2"
            autoComplete="off"
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="sort-2"
            style={{ minWidth: "100px" }}
          >
            Z - A
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
