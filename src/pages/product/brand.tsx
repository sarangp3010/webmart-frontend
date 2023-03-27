import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { updateProductActionThunk } from "../../store/products/products.action.async";
import { getBrandActionThunk } from "../../store/brand/brand.action.async";
import TRootState from "../../store/root.types";
interface Prop {
  setTabValue: Function;
  tabValue: number;
}

const Brand: React.FC<Prop> = ({ setTabValue, tabValue }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location?.state as { tab: string };
  const { brands } = useSelector(
    (state: TRootState) => state?.brand?.brands || {}
  );
  const { singleProductData } = useSelector(
    (state: TRootState) => state?.product
  );

  const [brandId, setBrandId] = useState(
    singleProductData?.brandId ? singleProductData?.brandId : null
  );

  const handleCategoryChange = (val: any) => {
    const selecteBrand = (
      (brands || []).map((ca) => ({
        label: ca?.name,
        value: ca?.id,
      })) || []
    ).find((ct) => ct?.value === val.value);
    setBrandId(selecteBrand?.value as any);
  };

  const handleSubmit = () => {
    dispatch(
      updateProductActionThunk(
        {
          brandId,
          completedStep: 3,
        },
        singleProductData?.id,
        function () {
          setTabValue(4);
          navigate(location?.pathname, {
            state: {
              tab: 4,
            },
          });
        },
        Number(state?.tab) || 1
      )
    );
  };

  useEffect(() => {
    dispatch(getBrandActionThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBrandId(singleProductData?.brandId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleProductData]);

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
                          Produt Brand <span className="text-danger">*</span>
                        </label>
                        <Select
                          className="custom-select-dropdown"
                          defaultValue={
                            brandId
                              ? (
                                  (brands || []).map((ca) => ({
                                    label: ca?.name,
                                    value: ca?.id,
                                  })) || []
                                ).find((prod) => prod?.value === brandId)
                              : brands && brands[0]
                          }
                          value={
                            brandId &&
                            ((
                              (brands || []).map((ca) => ({
                                label: ca?.name,
                                value: ca?.id,
                              })) || []
                            ).find((prod) => prod?.value === brandId) ||
                              {})
                          }
                          onChange={(val) => handleCategoryChange(val)}
                          placeholder="-- Select --"
                          options={
                            (brands || []).map((ca) => ({
                              label: ca?.name,
                              value: ca?.id,
                            })) as any
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light text-right">
            <button type="button" className="btn btn-secondary clear-form mr-2" onClick={() => navigate("/products/list")}>
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

export default Brand;
