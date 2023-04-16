import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

import { getOrderListActionThunk } from "../../store/order/order.actions.async";
import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

const OrderList = () => {
  const dispatch = useDispatch();

  const [tempSearch, setTempSearch] = useState("");
  const loading = useSelector((state: TRootState) => state?.order?.loading);
  const { orders } = useSelector((state: TRootState) => state?.order?.orders);

  useEffect(() => {
    dispatch(getOrderListActionThunk(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    dispatch(getOrderListActionThunk({ search: tempSearch }));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div id="app">
          <div className="content-wrapper">
            <div className="content">
              <header className="page-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h1>Orders</h1>
                  </div>
                  <div className="" style={{ marginRight: "10px" }}>
                    <div className="input-group w-250">
                      <input
                        type="text"
                        className="form-control mr-3"
                        placeholder="Search"
                        title="Search"
                        value={tempSearch}
                        onChange={(e) => {
                          setTempSearch(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="ml-2" style={{ marginRight: "10px" }}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>

                  <div className="m-l-10"></div>
                </div>
              </header>
              <section className="page-content container-fluid">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover nowrap m-0">
                        <thead>
                          <tr>
                            <th>Order Id</th>
                            <th className="text-center">Product</th>
                            <th className="text-center">Grand Total</th>
                            <th className="text-center">Sub Total</th>
                            <th className="table-field-actions">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading ? (
                            orders && orders?.length > 0 ? (
                              orders?.map((order: any) =>
                                order?.orderDetails?.map(
                                  (order: any, index: number) => (
                                    <React.Fragment key={index}>
                                      <tr>
                                        <td>
                                          <h6 className="mt-1 mb-0">
                                            {order?.id}
                                          </h6>
                                        </td>
                                        <td className="text-center">
                                          {order?.product?.name || "No Product"}
                                        </td>
                                        <td className="text-center">
                                          {Number(order?.subTotal)?.toFixed(
                                            2
                                          ) || "N/A"}
                                        </td>
                                        <td className="text-center">
                                          {Number(order?.grandTotal)?.toFixed(
                                            2
                                          ) || "N/A"}
                                        </td>
                                        <td className="text-center">
                                          <Dropdown className="btn-group">
                                            <Dropdown.Menu>
                                              <Dropdown.Item onClick={() => {}}>
                                                Delete
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                    </React.Fragment>
                                  )
                                )
                              )
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
    </React.Fragment>
  );
};

export default OrderList;
