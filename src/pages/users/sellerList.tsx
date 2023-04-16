import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";

import {
  getUsersActionThunk,
  deleteUserActionThunk,
} from "../../store/user/user.actions.async";
import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

const OrderList = () => {
  const dispatch = useDispatch();

  const [tempSearch, setTempSearch] = useState("");
  const [userId, setUserId] = useState("");
  const loading = useSelector((state: TRootState) => state?.user?.loading);
  const { users } = useSelector((state: TRootState) => state?.user?.usersList);
  const [sweetAlert, setSweetAlert] = useState(false);

  const showAlert = () => {
    setSweetAlert(true);
  };

  const hideAlert = () => {
    setSweetAlert(false);
  };

  const handleDelete = () => {
    dispatch(deleteUserActionThunk(userId));
    hideAlert();
  };

  useEffect(() => {
    dispatch(getUsersActionThunk("seller", undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    dispatch(getUsersActionThunk("seller", tempSearch));
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
                    <h1>Seller</h1>
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
                            <th>First Name</th>
                            <th className="text-center">Last Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Mobile Number</th>
                            <th className="text-center">Status</th>
                            {/* <th className="text-center">Credits</th> */}
                            {/* <th className="table-field-actions">Actions</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {!loading ? (
                            users && users?.length > 0 ? (
                              users?.map((user: any, index: number) => (
                                <React.Fragment key={index}>
                                  <tr>
                                    <td>
                                      <h6 className="mt-1 mb-0">
                                        {user?.firstName}
                                      </h6>
                                    </td>
                                    <td className="text-center">
                                      {user?.lastName || "No Product"}
                                    </td>
                                    <td className="text-center">
                                      {user?.email || "-"}
                                    </td>
                                    <td className="text-center">
                                      {user?.momobileNumber || "-"}
                                    </td>
                                    <td className="text-center">
                                      {user?.isActive
                                        ? "Verified"
                                        : "Un-Verified"}
                                    </td>

                                    {/* <td className="text-center">
                                      {user?.totalCredits || 0}
                                    </td> */}
                                    {/* <td className="">
                                      <Dropdown className="btn-group">
                                        <Dropdown.Toggle
                                          id="dropdown-basic"
                                          className="btn btn-sm btn-icon-only"
                                        ></Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item
                                            onClick={() => {
                                              setUserId(user?.id as string);
                                              showAlert();
                                            }}
                                          >
                                            Delete
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </td> */}
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

export default OrderList;
