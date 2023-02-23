import { useState } from "react";
const SideBar: React.FC<any> = (props: any) => {
  const [minPrice, setMinPrice] = useState(99);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [categoryId, setCategory] = useState(0);
  const [type, setType] = useState("all");

  return (
    <div className="sidebar">
      <pre className="fs-2">Filters:</pre>
      <div className="price-filter-section mb-4 ms-3">
        <pre className="fs-4">Price</pre>

        <div className="price-filter price-selection-input mb-5">
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
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            step="1"
          />
          <input
            className="float-end"
            type="number"
            id="price-max"
            name="price-max"
            min="10"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            step="1"
          />
        </div>
        <button
          onClick={() => props.setFilters({ minPrice, maxPrice, category: categoryId, type })}
          style={{ marginLeft: "2rem" }}
          className="btn btn-primary"
        >
          Apply
        </button>
      </div>

      <hr />

      <div className="category-filter-section mb-4 ms-3">
        <pre className="fs-4 mb-2">Category</pre>

        <div
          className="btn-group-vertical category-selection-input ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="category"
            id="category-1"
            autoComplete="off"
            value={1}
            checked={categoryId === 1}
            onChange={(e) => {
              setCategory(Number(e.target.value));
              props.setFilters({ minPrice, maxPrice, category: Number(e.target.value), type })
            }}
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
            value={2}
            checked={categoryId === 2}
            onChange={(e) => {
              setCategory(Number(e.target.value));
              props.setFilters({ minPrice, maxPrice, category: Number(e.target.value), type})
            }}
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
            value={3}
            checked={categoryId === 3}
            onChange={(e) => {
              setCategory(Number(e.target.value));
              props.setFilters({ minPrice, maxPrice, category: Number(e.target.value), type})
            }}
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
          className="btn-group-vertical type-selection-input ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="type"
            id="type-1"
            autoComplete="off"
            value={"New"}
            checked={type === "New"}
            onChange={(e) => {
              setType(e.target.value);
              props.setFilters({ minPrice, maxPrice, category: Number(e.target.value), type: e.target.value })
            }}
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
            value={"Used"}
            checked={type === "Used"}
            onChange={(e) => {
              setType(e.target.value);
              props.setFilters({ minPrice, maxPrice, category: Number(e.target.value), type: e.target.value })
            }}
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
      <div className="sort-filter-section mb-4 ms-3">
        <div
          className="btn-group-vertical type-selection-input ms-3 mt-1"
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
