import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import {
  getProductsActionThunk,
  deleteProductActionThunk,
} from "../../store/products/products.action.async";
import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

const ProductsAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productId, setProductId] = useState("");
  const [sweetAlert, setSweetAlert] = useState(false);

  const loading = useSelector((state: TRootState) => state?.product?.loading);
  const { products } = useSelector(
    (state: TRootState) => state?.product?.products
  );

  const showAlert = () => {
    setSweetAlert(true);
  };

  const hideAlert = () => {
    setSweetAlert(false);
  };

  const handleDelete = () => {
    dispatch(deleteProductActionThunk(productId));
    hideAlert();
  };

  const handleClick = () => {
    navigate("/products/new", { state: { tab: 1 } });
  };

  useEffect(() => {
    dispatch(getProductsActionThunk(undefined, undefined, undefined));
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
                    <h1>Products</h1>
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
                      Add New Product
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
                            <th>Name</th>
                            <th className="text-center">Thumbnail</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Brand</th>
                            <th className="table-field-actions">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading ? (
                            products &&
                            products?.length > 0 &&
                            typeof products === "object" ? (
                              products?.map((p, index: number) => (
                                <React.Fragment key={index}>
                                  <tr>
                                    <td>
                                      <h6 className="mt-1 mb-0">{p?.name}</h6>
                                    </td>
                                    <td>
                                      <img
                                        className="align-self-center m-r-10 o-cover text-center"
                                        alt="Product Thumbnail"
                                        src={p?.thumbnailImage}
                                        style={{
                                          minHeight: "200px",
                                          minWidth: "200px",
                                          height: "200px",
                                          width: "200px",
                                        }}
                                      />
                                    </td>
                                    <td className="text-center">
                                      {p?.category?.type || "No Category"}
                                    </td>
                                    <td className="text-center">
                                      {p?.brand?.name || "No Brand"}
                                    </td>
                                    <td className="">
                                      <Dropdown className="btn-group">
                                        <Dropdown.Toggle
                                          id="dropdown-basic"
                                          className="btn btn-sm btn-icon-only"
                                        ></Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item
                                            as={Link}
                                            to={{
                                              pathname: "/products/" + p?.id,
                                            }}
                                          >
                                            Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            onClick={() => {
                                              setProductId(p?.id as string);
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
          title="Are you sure want to delete product?"
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

export default ProductsAdd;
