import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import { updateProductActionThunk } from "../../store/products/products.action.async";
import TRootState from "../../store/root.types";

import { BarsLoader } from "../../components/loader/loader";

interface Prop {
  setTabValue: Function;
  tabValue: number;
}

const Prices: React.FC<Prop> = ({ setTabValue, tabValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state as { tab: string };

  const loading = useSelector((state: TRootState) => state?.product.loading);

  const newProduct = useSelector(
    (state: TRootState) => state?.product?.singleProductData
  );

  const { id } = useParams<{ id: string }>();

  const productSchema = yup.object().shape({
    price: yup.number().required("Price is required"),
    discount: yup.number().min(0).max(100).required("Discount is required"),
    quantity: yup.number().required("quantity is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: productSchema,
    initialValues: {
      price: (newProduct && newProduct?.price) || "",
      discount: (newProduct && newProduct?.discount) || "",
      quantity: (newProduct && newProduct?.inventory?.quantity) || "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        updateProductActionThunk(
          {
            price: values?.price || 0,
            discount: values?.discount || 0,
            quantity: values?.quantity || 0,
            completedStep: state?.tab,
          },
          id,
          function () {
            setTabValue(1);
            navigate(location?.pathname, { state: { tab: 1 } });
          }
        )
      );
    },
  });

  const { errors, touched } = formik;

  return (
    <React.Fragment>
      {loading ? (
        <BarsLoader />
      ) : (
        <div className="tab-pane fadeIn active" id="tab-1">
          <form onSubmit={formik.handleSubmit}>
            <div className="card-body">
              <div className="d-flex flex-wrap">
                <div className="left-form-content">
                  <span></span>
                </div>
                <div className="row flex">
                  <div className="col-xl-8">
                    <div className="form-row add-product-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Price <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="price"
                            min={0}
                            value={formik.values.price}
                            placeholder="Enter Price"
                            className="form-control"
                            onChange={formik.handleChange}
                          />
                          {errors.price && touched.price && (
                            <div className="text-danger">{errors.price}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Discount <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="discount"
                            min={0}
                            max={100}
                            value={formik.values.discount}
                            placeholder="Enter discount"
                            className="form-control"
                            onChange={formik.handleChange}
                          />
                          {errors.discount && touched.discount && (
                            <div className="text-danger">{errors.discount}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Quantity <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="quantity"
                            min={0}
                            value={formik.values.quantity}
                            placeholder="Enter quantity"
                            className="form-control"
                            onChange={formik.handleChange}
                          />
                          {errors.quantity && touched.quantity && (
                            <div className="text-danger">{errors.quantity}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-light text-right ml-auto">
              <div className="">
                <button
                  type="button"
                  className="btn btn-secondary clear-form mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary`}
                  style={{ marginLeft: "30px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Prices;
