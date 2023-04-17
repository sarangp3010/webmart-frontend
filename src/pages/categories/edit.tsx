import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getCategoryActionThunk,
  updateCategoryActionThunk,
  addCategoryActionThunk,
  getCategoryByIdActionThunk,
} from "../../store/category/category.action.async";
import TRootState from "../../store/root.types";
import { API } from "../../middleware/middleware";

interface Prop {}

const CategoryAdd: React.FC<Prop> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const { category } = useSelector((state: TRootState) => state?.category);

  const [properties, setProperties] = useState(category?.properties || []);
  const [type, setType] = useState(category?.type || "");
  
  useEffect(() => {
    if (id !== "new") {
      dispatch(getCategoryActionThunk(id as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedirectToCategoryList = () => {
    navigate("/category/list");
  };

  const setOnChange = (value: string, index: number) => {
    const updatedProp = [...properties];
    updatedProp[index] = value;
    setProperties(updatedProp);
  };

  const setAddNewColumn = () => {
    let newProperties = [...properties, ""];
    setProperties(newProperties);
  };

  const setDeleteColumn = (ind: number) => {
    setProperties(properties?.splice(ind, 1));
  };

  const handleSubmit = () => {
    if (id !== "new" && category?.id) {
      dispatch(
        updateCategoryActionThunk(
          {
            type,
            properties,
          },
          id
        )
      );
    } else {
      dispatch(
        addCategoryActionThunk({
          type,
          properties,
        })
      );
    }
  };

  useEffect(() => {
    
    if (id !== "new") {
      dispatch(getCategoryByIdActionThunk(id as any));
      API.get("/categories/" + id)
      .then((res) => {
        setProperties(res?.data?.properties || []);
        setType(res?.data?.type || "")
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <React.Fragment>
      <div id="app">
        <div className="content-wrapper">
          <div className="container">
            <div className="content">
              <header className="page-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h1>
                      {id === "new" ? "Add New Category" : "Edit Category"}{" "}
                    </h1>
                  </div>
                  <div className="m-l-10">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRedirectToCategoryList()}
                    >
                      <i className="fa fa-angle-left"></i> Back
                    </button>
                  </div>
                </div>
              </header>

              <section className="page-content container-fluid">
                <div className="card card-tabs">
                  <div className="card-body p-0">
                    <div className="form-row p-3 m-2">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="control-label">
                            Type <span className="text-danger mb-2">*</span>
                          </label>
                          <input
                            type="text"
                            name="type"
                            value={type}
                            className="form-control"
                            onChange={(e) => setType(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <button
                        onClick={() => setAddNewColumn()}
                        className="py-2 px-4 btn btn-dark"
                      >
                        Add a new Property{" "}
                        <span className="my-2 mx-2 cursor-pointer">
                          <i className="fa fa-plus" />
                        </span>
                      </button>

                      <div className="my-3 container">
                        <div className="row">
                          {properties &&
                            (properties || []).map((prop, i) => (
                              <div key={i} className="pt-3 pr-8 col-md-4">
                                <div>
                                  <input
                                    type="text"
                                    className="p-2"
                                    value={prop}
                                    onChange={(e) =>
                                      setOnChange(e.target.value, i)
                                    }
                                  />
                                  <>
                                    <button
                                      onClick={() => setDeleteColumn(i)}
                                      className="mx-3 btn btn-danger mr-2"
                                    >
                                      <span className=" cursor-pointer">
                                        <i className="fa fa-trash" />
                                      </span>
                                    </button>
                                  </>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="card-footer bg-light text-right ml-auto">
                <div className="">
                  <button
                    onClick={() => handleSubmit()}
                    className={`btn btn-primary`}
                    style={{ marginLeft: "30px" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryAdd;
