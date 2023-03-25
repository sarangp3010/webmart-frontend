import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductByIdActionThunk } from "../../store/products/products.action.async";
import TRootState from "../../store/root.types";
import * as requestFromServer from "../../services/brand/brand";

import BasicDetails from "./basicDetails";
import Prices from "./prices";
import Brand from "./brand";
import Category from "./category";
const ProductsAdd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = location?.state as { tab: string };
  const [tabValue, setTabValue] = useState(Number(state?.tab) || 1);

  const { id } = useParams<{ id: string }>();

  const { singleProductData } = useSelector(
    (state: TRootState) => state?.product
  );

  const handleActive = (tab: number) => {
    if (singleProductData && tab <= singleProductData?.completedStep + 1) {
      if (tabValue === tab) {
        return "nav-link active show";
      } else {
        return "nav-link";
      }
    } else {
      return tab === 1 ? "nav-link active show" : "nav-link deactive";
    }
  };

  const handleTabs = (e: React.MouseEvent<HTMLElement>, tab: number) => {
    if (id !== "new" && singleProductData?.id) {
      if (singleProductData && tab > singleProductData?.completedStep + 1) {
        e?.preventDefault();
        return;
      }
      setTabValue(tab);
      navigate(location?.pathname, { state: { tab: tab } });
    } else {
      e?.preventDefault();
    }
  };

  useEffect(() => {
    setTabValue(Number(state?.tab) || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.tab]);

  useEffect(() => {
    if (id !== "new") {
      dispatch(
        getProductByIdActionThunk(
          id as string,
          () => {
            setTabValue(1);
            navigate(location?.pathname, { state: { tab: 1 } });
          },
          () => {
            setTabValue(Number(state?.tab));
          }
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedirectToProductList = () => {
    navigate("products/list");
  };

  return (
    <React.Fragment>
      <div id="app">
        <div className="content-wrapper">
          <div className="container">
            <div className="content">
              <header className="page-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h1>{"Add New"} Product</h1>
                  </div>
                  <div className="m-l-10">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleRedirectToProductList()}
                    >
                      <i className="fa fa-angle-left">&nbsp;</i> Back
                    </button>
                  </div>
                </div>
              </header>

              <section className="page-content container-fluid">
                <div className="card card-tabs">
                  <div className="card-header clearfix">
                    <ul className="nav nav-tabs primary-tabs m-0">
                      <li className="nav-item" role="presentation">
                        <a
                          onClick={(e) => handleTabs(e, 1)}
                          className={handleActive(1)}
                        >
                          Basic Details
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          onClick={(e) => handleTabs(e, 2)}
                          className={handleActive(2)}
                        >
                          Category
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          onClick={(e) => handleTabs(e, 3)}
                          className={handleActive(3)}
                        >
                          Brand
                        </a>
                      </li>

                      <li className="nav-item" role="presentation">
                        <a
                          onClick={(e) => handleTabs(e, 4)}
                          className={handleActive(4)}
                        >
                          Prices
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-0">
                    <div className="tab-content">
                      {tabValue === 1 ? (
                        <BasicDetails setTabValue={setTabValue} />
                      ) : null}

                      {tabValue === 2 ? (
                        <Category
                          setTabValue={setTabValue}
                          tabValue={tabValue}
                        />
                      ) : null}
                      {tabValue === 3 ? (
                        <Brand setTabValue={setTabValue} tabValue={tabValue} />
                      ) : null}

                      {tabValue === 4 ? (
                        <Prices setTabValue={setTabValue} tabValue={tabValue} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsAdd;
