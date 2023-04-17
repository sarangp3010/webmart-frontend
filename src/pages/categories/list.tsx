import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import {
  getCategoryActionThunk,
  deleteCategoryActionThunk,
} from "../../store/category/category.action.async";
import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryId, setcategoryId] = useState("");
  const [sweetAlert, setSweetAlert] = useState(false);

  const loading = useSelector((state: TRootState) => state?.category?.loading);
  const { categories } = useSelector(
    (state: TRootState) => state?.category?.categories
  );

  const showAlert = () => {
    setSweetAlert(true);
  };

  const hideAlert = () => {
    setSweetAlert(false);
  };

  const handleDelete = () => {
    dispatch(deleteCategoryActionThunk(categoryId));
    hideAlert();
  };

  const handleClick = () => {
    navigate("/category/new");
  };

  useEffect(() => {
    dispatch(getCategoryActionThunk(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div id="app">
          <div className="content-wrapper">
            <div className="content">
              <header className="page-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h1>Categories</h1>
                  </div>
                  <div className="m-l-10">
                    <div className="input-group w-250"></div>
                  </div>
                  <div className="m-l-10">
                    <div className="input-group d-flex">
                      <div className="input-group-append"></div>
                    </div>
                  </div>

                  <div className="m-l-10">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleClick()}
                    >
                      Add New Category
                    </button>
                  </div>
                </div>
              </header>
              <section className="page-content container-fluid">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover nowrap m-0">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th className="mr-auto text-right table-field-actions">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading ? (
                            categories &&
                            categories?.length > 0 &&
                            typeof categories === "object" ? (
                              categories?.map((p, index: number) => (
                                <React.Fragment key={index}>
                                  <tr>
                                    <td>
                                      <h6 className="mt-1 mb-0">{p?.type}</h6>
                                    </td>

                                    <td className="mr-auto text-right">
                                      <Dropdown className="btn-group">
                                        <Dropdown.Toggle
                                          id="dropdown-basic"
                                          className="btn btn-sm btn-icon-only"
                                        ></Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item
                                            as={Link}
                                            to={{
                                              pathname: "/category/" + p?.id,
                                            }}
                                          >
                                            Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            onClick={() => {
                                              setcategoryId(p?.id as string);
                                              showAlert();
                                            }}
                                          >
                                            Delete
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </td>
                                  </tr>
                                </React.Fragment>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={7} style={{ textAlign: "center" }}>
                                  No records found.
                                </td>
                              </tr>
                            )
                          ) : (
                            <tr>
                              <td colSpan={7} style={{ textAlign: "center" }}>
                                <BarsLoader />
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {sweetAlert && (
        <SweetAlert
          danger
          showCancel
          title="Are you sure want to delete category?"
          onConfirm={hideAlert}
          onCancel={hideAlert}
          customButtons={
            <React.Fragment>
              <button className="btn btn-dark mr-3" onClick={hideAlert}>
                No
              </button>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "20px" }}
                onClick={handleDelete}
              >
                Yes
              </button>
            </React.Fragment>
          }
        ></SweetAlert>
      )}
    </React.Fragment>
  );
};

export default CategoryList;
