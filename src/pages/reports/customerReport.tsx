import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment";
import { CSVLink } from "react-csv";
import * as excel from "exceljs";
import { saveAs } from "file-saver";

import Report from "./list";
import Pagination from "../../components/pagination/pagination";
import CustomerReportsList from "./costomerReportList";
import TRootState from "../../store/root.types";
import { getCustomerReportsActionThunk } from "../../store/reports/reports.actions.async";

const CustomerReports = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location?.state as { page: string };
  const [page, setPage] = useState(Number(state?.page) || 1);
  const [searchCustomer, setSearchCustomer] = useState("");

  const customers = useSelector(
    (state: TRootState) => state?.report?.customerData
  );

  const itemsPerPage = 10;
  /**
   *  get customer reports thunk dispatch
   */
  const fetchCustomersReports = (pages?: number) => {
    dispatch(
      getCustomerReportsActionThunk(searchCustomer, pages || page, itemsPerPage)
    );
  };

  /**
   * get customer reports by filter
   */
  const customerReportsFilterSubmitHandler = () => {
    fetchCustomersReports();
  };

  /**
   * download csv and excel
   */
  const headers = [
    { label: "First Name", key: "user_first_name" },
    { label: "Last Name", key: "user_last_name" },
    { label: "Email Id", key: "user_email" },
    { label: "Customer Status", key: "user_is_active" },
    { label: "No. of Orders", key: "TotalOrders" },
    { label: "Total Amount Recived", key: "TotalAmountPaid" },
  ];

  /**
   * xlsx file generate functionality
   * @param data
   * @param fileName
   */
  function generateXLSX(
    data: any,
    fileName: any,
    header: { key: string; header: string; style?: any }[]
  ) {
    const workbook: excel.Workbook = new excel.Workbook();
    const sheet: excel.Worksheet = workbook.addWorksheet(fileName);
    sheet.getRow(1).font = { bold: true };
    sheet.columns = header;
    for (let item of data) {
      sheet.addRow({
        firstName: item?.user_first_name,
        lastName: item?.user_last_name,
        emailId: item?.user_email,
        customerStatus: +item?.user_is_active === 1 ? "Active" : "Inactive",
        noOfOrders: item?.TotalOrders || "-",
        totalAmountReceived: item?.TotalAmountPaid
          ? "$" + (item?.TotalAmountPaid || 0).toFixed(2)
          : "-",
      });
    }
    sheet.columns?.forEach((column: any) => {
      const lengths: any = column.values?.map(
        (v: any) => v.toString().length + 20
      );
      const maxLength = Math.max(
        ...lengths.filter((v: number) => typeof v === "number")
      );
      column.width = maxLength;
    });
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, `${fileName}.xlsx`);
    });
  }

  return (
    <Report>
      <div className="tab-pane fadeIn active" id="tab-1">
        <div className="px-3 pt-3 pb-2 d-flex justify-content-end">
          <div style={{ marginLeft: "10px" }}>
            <div className="input-group w-250">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                title="Search"
                value={searchCustomer}
                onChange={(e) => setSearchCustomer(e.target.value)}
              />

              <div className="input-group-append"></div>
            </div>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                setPage(1);
                customerReportsFilterSubmitHandler();
              }}
            >
              Submit
            </button>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <Dropdown>
              <Dropdown.Toggle
                className="px-3 no-arrow"
                variant="dark"
                id="dropdown-basic"
              >
                <i className="fa fa-download text-white"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "150px" }}>
                <Dropdown.Item
                  href=""
                  onClick={() =>
                    generateXLSX(customers?.customers, `Customer Report`, [
                      {
                        key: "firstName",
                        header: "First Name",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        key: "lastName",
                        header: "Last Name",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        key: "emailId",
                        header: "Email Id",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        key: "customerStatus",
                        header: "Customer Status",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        key: "noOfOrders",
                        header: "No. of Orders",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        key: "totalAmountReceived",
                        header: "Total Amount Recived",
                        style: { alignment: { horizontal: "left" } },
                      },
                    ])
                  }
                >
                  <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                </Dropdown.Item>
                <CSVLink
                  className="dropdown-item"
                  data={customers?.customers?.map((report: any) => ({
                    ...report,
                    user_mobile_number:
                      report?.user_country_code && report?.user_mobile_number
                        ? report?.user_country_code +
                          " " +
                          report?.user_mobile_number
                        : "-",
                    user_created_at:
                      moment(report?.user_created_at).format("MM/DD/YYYY") ||
                      "-",
                    subscription_status:
                      report?.user_user_subscription_count === 0
                        ? "Free"
                        : "Paid",
                    TotalOrders: report?.TotalOrders.toString() || "-",
                    TotalAmountPaid: report?.TotalAmountPaid
                      ? "$" + report?.TotalAmountPaid
                      : "-",
                    user_is_active:
                      +report?.user_is_active === 1 ? "Active" : "Inactive",
                  }))}
                  headers={headers}
                  filename={`Customer Report`}
                >
                  <i className="fa fa-file-csv fa-fw mr-1"></i>
                  CSV
                </CSVLink>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Pagination
          ItemsComponent={CustomerReportsList}
          pageCount={customers?.count || 0}
          page={page}
          setPage={setPage}
          dispatchAction={fetchCustomersReports}
        />
      </div>
    </Report>
  );
};

export default CustomerReports;
