import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import ModalAdd from "../components/Modals/ModalAdd";
import {
  getBrandActionThunk,
  addBrandActionThunk,
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
    // dispatch(deleteBrandAction(brandId));
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
                        <label className="control-label">
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
          <div className="card-footer text-right">
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
                          <div className="m-l-10">
                            <button
                              type="button"
                              onClick={() => setShowAddModal(true)}
                              className="btn btn-success"
                            >
                              {"Add New"}
                            </button>
                          </div>
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
                                  className="card  col-md-2 mx-2 my-2 brand-cards"
                                >
                                  <div
                                    className="card-body"
                                    style={{ textAlign: "center" }}
                                  >
                                    <span>{b && b.name} </span>
                                    <i
                                      onClick={() => {
                                        setBrandId((b?.id || "") as any);
                                        setShowDeleteModal(true);
                                      }}
                                      className="fa fa-trash-alt fa-fw text-danger delete-icon"
                                    ></i>
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
