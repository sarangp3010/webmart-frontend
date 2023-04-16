import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as excel from "exceljs";
import { saveAs } from "file-saver";
import { CSVLink } from "react-csv";
import moment from "moment";

import Report from "./list";
import Pagination from "../../components/pagination/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TRootState from "../../store/root.types";
import OrderReportsList from "./OrderReportsList";
import { getOrderReportsActionThunk } from "../../store/reports/reports.actions.async";

const OrderReports = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location?.state as { page: string };
  const [page, setPage] = useState(Number(state?.page) || 1);
  const [searchOrder, setSearchOrder] = useState("");

  const orderReports = useSelector(
    (state: TRootState) => state?.report?.orderData
  );
  const fetchOrderReports = (pages?: number) => {
    dispatch(getOrderReportsActionThunk(searchOrder || null));
  };

  const orderReportsFilterSubmitHandler = () => {
    fetchOrderReports();
  };

  const headers = [
    { label: "Order Id", key: "orderId" },
    { label: "Quantity", key: "quantity" },
    { label: "Customer First Name", key: "customerFirstName" },
    { label: "Customer Last Name", key: "customerLastName" },
    { label: "Customer Email", key: "customerEmail" },
    { label: "Order Booked Date & Time", key: "orderBookedTime" },
    { label: "Product Name", key: "productName" },
    { label: "Total Amount", key: "totalAmount" },
  ];

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
        orderId: item?.orderDetails_id ? item?.orderDetails_id : "-",
        quantity: item?.orderDetails_quantity
          ? item?.orderDetails_quantity
          : "-",
        customerFirstName: item?.user_first_name ? item?.user_first_name : "-",
        customerLastName: item?.user_last_name ? item?.user_last_name : "-",
        customerEmail: item?.user_email ? item?.user_email : "-",
        orderBookedTime: item?.order_created_at
          ? moment(item?.order_created_at).format("DD/MM/YYYY hh:mm A")
          : "-",
        productName: item?.product_name ? item?.product_name : "-",
        totalAmount: item?.orderDetails_grand_total
          ? "$" + item?.orderDetails_grand_total
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
  const separator = "\t";
  return (
    <Report>
      <div className="tab-pane fadeIn active" id="tab-4">
        <div className="px-3 pt-3 pb-2 d-flex justify-content-end">
          <div style={{ marginLeft: "10px" }}>
            <div className="input-group w-250">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                title="Search"
                value={searchOrder}
                onChange={(e) => setSearchOrder(e.target.value)}
              />
            </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                setPage(1);
                orderReportsFilterSubmitHandler();
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
              <Dropdown.Menu className="w-150">
                <Dropdown.Item
                  href=""
                  onClick={() =>
                    generateXLSX(orderReports?.ordersReports, `Order Report`, [
                      {
                        header: "Order Id",
                        key: "orderId",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Quantity",
                        key: "quantity",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Customer First Name",
                        key: "customerFirstName",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Customer Last Name",
                        key: "customerLastName",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Customer Email",
                        key: "customerEmail",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Order Booked Date & Time",
                        key: "orderBookedTime",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Product Name",
                        key: "productName",
                        style: { alignment: { horizontal: "left" } },
                      },
                      {
                        header: "Total Amount",
                        key: "totalAmount",
                        style: { alignment: { horizontal: "left" } },
                      },
                    ])
                  }
                >
                  <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                </Dropdown.Item>
                <CSVLink
                  className="dropdown-item"
                  data={orderReports?.ordersReports?.map((report: any) => ({
                    ...report,
                    orderId: report?.orderDetails_id
                      ? report?.orderDetails_id
                      : "-",
                    quantity: report?.orderDetails_quantity
                      ? report?.orderDetails_quantity
                      : "-",
                    customerFirstName: report?.user_first_name
                      ? report?.user_first_name
                      : "-",
                    customerLastName: report?.user_last_name
                      ? report?.user_last_name
                      : "-",
                    customerEmail: report?.user_email
                      ? report?.user_email
                      : "-",
                    orderBookedTime: report?.order_created_at
                      ? moment(report?.order_created_at).format(
                          "DD/MM/YYYY hh:mm A"
                        )
                      : "-",
                    productName: report?.product_name
                      ? report?.product_name
                      : "-",
                    totalAmount: report?.orderDetails_grand_total
                      ? "$" + report?.orderDetails_grand_total
                      : "-",
                    report,
                  }))}
                  headers={headers}
                  filename={`Order Report`}
                  separator={separator}
                >
                  <i className="fa fa-file-csv fa-fw mr-1"></i>
                  CSV
                </CSVLink>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Pagination
          ItemsComponent={OrderReportsList}
          pageCount={orderReports?.count || 0}
          page={page}
          setPage={setPage}
          dispatchAction={fetchOrderReports}
        />
      </div>
    </Report>
  );
};

export default OrderReports;
