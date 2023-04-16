import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Prop {
  children: ReactNode;
}

const Report: React.FC<Prop> = ({ children }) => {
  return (
    <React.Fragment>
      <div id="app">
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Reports</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <NavLink to={"/reports/customer"} className="nav-link">
                        Customer Reports
                      </NavLink>
                    </li>

                    <li className="nav-item" role="presentation">
                      <NavLink to={"/reports/order"} className="nav-link">
                        Order Reports
                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink to={"/reports/product"} className="nav-link">
                        Product Reports
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">{children}</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Report;
