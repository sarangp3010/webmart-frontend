import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import ModalAdd from "../components/Modals/ModalAdd";
import {
  getBrandActionThunk,
  addBrandActionThunk,
  deleteBrandActionThunk,
} from "../store/brand/brand.action.async";
import TRootState from "../store/root.types";
import { BarsLoader } from "../components/loader/loader";
import ModalDelete from "../components/Modals/ModalDelete";

const Brands = () => {
  const dispatch = useDispatch();

  const { brands } = useSelector(
    (state: TRootState) => state?.brand?.brands || {}
  );
  const loading = useSelector(
    (state: TRootState) => state.brand.loading || false
  );
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [brandId, setBrandId] = useState(null);

  useEffect(() => {
    dispatch(getBrandActionThunk());
  }, [dispatch]);

  useEffect(() => {}, [brands]);

  const brandSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    threshold: Yup.number().required("Threshold is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: brandSchema,
    initialValues: {
      name: "",
      threshold: 100,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addBrandActionThunk({
          name: values?.name || "",
          threshold: values?.threshold,
        })
      );
    },
  });

  const { errors, touched } = formik;

  const deleteBrand = () => {
    dispatch(deleteBrandActionThunk(brandId || "" as string));
  };

  return (
    <div id="app">
      <ModalDelete
        show={showDeleteModal}
        hideModal={() => setShowDeleteModal(false)}
        deleteAction={deleteBrand}
        message="All models related to this brand will be deleted!"
      />
      <ModalAdd
        show={showAddModal}
        hideModal={() => setShowAddModal(false)}
        title="Brand"
      >
        <form className="form-horizontal" onSubmit={formik.handleSubmit}>
          <div className="card-body">
            <div className="d-flex">
              <div className="row flex">
                <div className="col-xl-12">
                  <div className="form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formik.values.name}
                          placeholder="Enter discount"
                          className="form-control"
                          onChange={formik.handleChange}
                        />
                        {errors.name && touched.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label mt-2">
                          Threshold <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          name="name"
                          value={formik.values.threshold}
                          placeholder="Enter discount"
                          className="form-control"
                          onChange={formik.handleChange}
                        />
                        {errors.threshold && touched.threshold && (
                          <div className="text-danger">{errors.threshold}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </ModalAdd>
      <div className="container">
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>{"Brands"}</h1>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setShowAddModal(true)}
                    className="btn btn-primary"
                  >
                    {"Add New"}
                  </button>
                </div>
              </div>
            </header>
            <section
              className="page-content container-fluid"
              style={{ paddingTop: "20px" }}
            >
              <div className="card card-tabs clearfix">
                <div className="card-body p-0">
                  <div className="tab-content">
                    <div className="tab-pane fadeIn active" id="tab-1">
                      <div className="p-3 d-flex justify-content-end inner-filter">
                        <div className="d-flex align-items-center">
                          <div className="m-l-10"></div>
                        </div>
                      </div>
                      <div className="container ">
                        {loading ? (
                          <div style={{ textAlign: "center" }} className="my-5">
                            <BarsLoader />
                          </div>
                        ) : (
                          <div className="row">
                            {brands ? (
                              brands.map((b, i) => (
                                <div
                                  key={i}
                                  className="card col-md-2 mx-2 my-2 brand-cards"
                                >
                                  <div
                                    className="card-body"
                                    style={{ textAlign: "center" }}
                                  >
                                    <span>{b && b.name} </span>
                                    <span
                                      className="material-symbols-outlined"
                                      onClick={() => {
                                        setBrandId((b?.id || "") as any);
                                        setShowDeleteModal(true);
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                      >
                                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p style={{ textAlign: "center" }}>
                                {"No Brands Available"}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
