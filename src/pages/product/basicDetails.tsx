import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import AWS from "aws-sdk";
import * as yup from "yup";

import {
  addProductsActionThunk,
  updateProductActionThunk,
} from "../../store/products/products.action.async";
import TRootState from "../../store/root.types";

import { BarsLoader } from "../../components/loader/loader";

interface Prop {
  setTabValue: Function;
}

AWS.config.update({
  accessKeyId: "AKIAXBQMUZQ6AFYZN5D7",
  secretAccessKey: "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",
  region: "us-east-1",
  signatureVersion: "v4",
});

const BasicDetails: React.FC<Prop> = ({ setTabValue }) => {
  const s3 = new AWS.S3();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state as { tab: string };

  const loading = useSelector((state: TRootState) => state?.product.loading);

  const newProduct = useSelector(
    (state: TRootState) => state?.product?.singleProductData
  );

  const uploadS3 = async (file: any, formik: any) => {
    if (!file) {
      return;
    }
    const params = {
      Bucket: "sarang30",
      Key: `${Date.now()}.${file.name}`,
      Body: file,
    };
    const { Location } = await s3.upload(params).promise();
    formik && formik?.setFieldValue("thumbnailImage", Location);
  };

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (newProduct?.id && id === "new") {
      setTabValue(2);
      navigate("/products/" + newProduct?.id, { state: { tab: 2 } });
    }
    if (newProduct?.id && !state?.tab) {
      setTabValue(1);
      navigate("/products/" + newProduct?.id, { state: { tab: 1 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newProduct, id]);

  const productSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    thumbnailImage: yup.string().required("Image is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: productSchema,
    initialValues: {
      name: (newProduct && newProduct?.name) || "",
      description: (newProduct && newProduct?.description) || "",
      thumbnailImage: (newProduct && newProduct?.thumbnailImage) || "",
      isUsed: (newProduct && newProduct?.isUsed.toString()) || "1",
    },
    onSubmit: (values, { resetForm }) => {
      if (id !== "new" && newProduct?.id) {
        dispatch(
          updateProductActionThunk(
            {
              name: values?.name,
              description: values?.description,
              thumbnailImage: values?.thumbnailImage,
              isUsed: values?.isUsed === "0" ? false : true,
              completedStep: state?.tab,
            },
            id,
            function () {
              setTabValue(2);
              navigate(location?.pathname, { state: { tab: 2 } });
            },
            Number(state?.tab) || 1
          )
        );
      } else {
        dispatch(
          addProductsActionThunk(
            {
              name: values?.name,
              description: values?.description,
              thumbnailImage: values?.thumbnailImage,
              isUsed: values?.isUsed === "0" ? false : true,
              completedStep: 1,
            },
            function () {
              setTabValue(2);
              navigate(location?.pathname, { state: { tab: 2 } });
            }
          )
        );
      }
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
                  <div
                    className="fileinput text-center fileinput-new"
                    data-provides="fileinput"
                  >
                    <div className="btn-file mt-3">
                      <div
                        className="thumbnail fileinput-new uploaded-user-image"
                        style={{
                          height: "150px",
                          width: "150px",
                        }}
                      >
                        <img
                          src={formik.values.thumbnailImage || ""}
                          alt="new one"
                        />
                      </div>
                      <div className="clearfix"></div>
                      <button className="fileinput-new btn btn-primary2 btn-sm btn-file mt-3">
                        {" "}
                        Browse Image{" "}
                      </button>
                      <input type="hidden" value="" name="..." />
                      <input type="hidden" value="" name="" />
                      <input
                        type="file"
                        name="thumbnailImage"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            (async function f(a) {
                              await uploadS3(a, formik);
                            })(file);
                          }
                        }}
                        file-model="myFile"
                      />
                      <div
                        className="fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle"
                        style={{
                          height: "150px",
                          width: "150px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row flex">
                  <div className="col-xl-8">
                    <div className="form-row add-product-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            placeholder="Full Name"
                            className="form-control"
                            onChange={formik.handleChange}
                          />
                          {errors.name && touched.name && (
                            <div className="text-danger">{errors.name}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label className="control-label">Description</label>
                          <textarea
                            name="description"
                            placeholder="Description"
                            className="form-control"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                          />
                          {errors.description && touched.description && (
                            <div className="text-danger">
                              {errors.description}
                            </div>
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
                  onClick={() => navigate("/products/list")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary`}
                  style={{ marginLeft: "30px" }}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default BasicDetails;
