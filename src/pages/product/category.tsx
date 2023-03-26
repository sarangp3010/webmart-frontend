import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { updateProductActionThunk } from "../../store/products/products.action.async";
import { getCategoryActionThunk } from "../../store/category/category.action.async";
import TRootState from "../../store/root.types";
interface Prop {
  setTabValue: Function;
  tabValue: number;
}

const Category: React.FC<Prop> = ({ setTabValue, tabValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { categories } = useSelector(
    (state: TRootState) => state?.category?.categories
  );

  const { singleProductData } = useSelector(
    (state: TRootState) => state?.product
  );
  const [categoryId, setCategoryId] = useState(
    singleProductData?.categoryId ? singleProductData?.categoryId : null
  );
  const [properties, setProperties] = useState(
    singleProductData?.properties || {}
  );
  const [categoryProperties, setCategoryProperties] = useState(
    singleProductData?.category?.properties || Object.keys(singleProductData?.properties || {}) || []
  );

  const handleCategoryChange = (val: any) => {
    const selecteCategory = ((categories || []).map((ca) => ({
      label: ca?.type,
      value: ca?.id,
    })) || []).find(
      (ct) => ct?.value === val.value
    );
    setCategoryId(selecteCategory?.value as any);
    const categoryProperties = ((categories || []).find((f) => f.id === val.value) || {})?.properties || [];
    setProperties(
      Object.assign(
        {},
        ...categoryProperties.map((key) => ({ [key]: properties[`${key}`] }))
      )
    );
    setCategoryProperties(categoryProperties as any);
  };

  const handlePropertiesChange = (e: any) => {
    const pro = Object.assign({}, properties, {
      [e.target.name]: e.target.value,
    });
    setProperties(pro);
  };

  const handleSubmit = () => {
    dispatch(
      updateProductActionThunk(
        {
          categoryId,
          properties,
          completedStep: tabValue < 4 ? tabValue + 1 : tabValue,
        },
        singleProductData?.id,
        function () {
          setTabValue(3);
          navigate(location?.pathname, {
            state: {
              tab: 3,
            },
          });
        }
      )
    );
  };
  useEffect(() => {
    dispatch(getCategoryActionThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCategoryId(singleProductData?.categoryId || "");
    setCategoryProperties(singleProductData?.category?.properties || []);
    setProperties(singleProductData?.properties || {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleProductData, singleProductData?.category]);

  return (
    <React.Fragment>
      <div className="tab-pane fadeIn active" id="tab-2">
        <form>
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
                          Produt Category <span className="text-danger">*</span>
                        </label>
                        <Select
                          className="custom-select-dropdown"
                          defaultValue={
                            categoryId
                              ? ((categories || []).map((ca) => ({
                                label: ca?.type,
                                value: ca?.id,
                              })) || []).find(
                                  (prod) => prod?.value === categoryId
                                )
                              : categories && categories[0]
                          }
                          value={
                            categoryId &&
                            (((categories || []).map((ca) => ({
                              label: ca?.type,
                              value: ca?.id,
                            })) || []).find(
                              (prod) => prod?.value === categoryId
                            ) || {})
                          }
                          onChange={(val) => handleCategoryChange(val)}
                          placeholder="-- Select --"
                          options={
                            (categories || []).map((ca) => ({
                              label: ca?.type,
                              value: ca?.id,
                            })) as any
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="form-row add-product-form">
                        {categoryProperties && (categoryProperties || []).length
                          ? (categoryProperties || []).map((ct) => (
                              <>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      {`${ct}`}
                                      {/* <span className="text-danger">*</span> */}
                                    </label>
                                    <input
                                      type="text"
                                      name={`${ct}`}
                                      value={`${properties[`${ct}`] || ""}`}
                                      placeholder={`Enter ${ct}`}
                                      className="form-control"
                                      onChange={(e) =>
                                        handlePropertiesChange(e)
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light text-right">
            <button type="button" className="btn btn-secondary clear-form mr-2">
              Cancel
            </button>
            <button
              type="button"
              className={`btn btn-primary`}
              style={{ marginLeft: "30px" }}
              onClick={() => handleSubmit()}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Category;
