import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as excel from "exceljs";
import { saveAs } from "file-saver";

import Pagination from "../../components/pagination/pagination";
import Report from "./list";
import { getProductReportsActionThunk } from "../../store/reports/reports.actions.async";
import { useDispatch, useSelector } from "react-redux";
import TRootState from "../../store/root.types";
import { useLocation } from "react-router-dom";
import ProductReportsList from "./ProductReportsList";
import { CSVLink } from "react-csv";

const ProductReports = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const state = location?.state as { page: string };
  const [searchProduct, setSearchProduct] = useState("");
  const [page, setPage] = useState(1);

  const productReports = useSelector(
    (state: TRootState) => state?.report?.productData
  );

  /**
   * get product reports by filter
   */
  const productReportsFilterSubmitHandler = () => {
    fetchProductsReports();
  };

  const fetchProductsReports = (pages?: number) => {
    dispatch(getProductReportsActionThunk(searchProduct || null));
  };
  const headers = [
    { label: "Product Id", key: "productId" },
    { label: "Product", key: "productName" },
    { label: "Brand", key: "brandName" },
    { label: "Category", key: "categoryName" },
    { label: "Price", key: "price" },
    { label: "Doscount", key: "discount" },
    { label: "No. of Orders", key: "noOfOrders" },
    { label: "Total Sales", key: "totalSales" },
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
        productId: item?.products_id ? item?.products_id : "-",
        productName: item?.products_name ? item?.products_name : "-",
        brandName: item?.brand_name ? item?.brand_name : "-",
        categoryName: item?.category_type ? item?.category_type : "-",
        price: item?.products_price
          ? "$" + (item?.products_price || 0).toFixed()
          : "-",
        discount: item?.products_discount
          ? "$" + (item?.products_discount || 0).toFixed()
          : "-",
        noOfOrders: item?.TotalOrder ? item?.TotalOrder : "-",
        totalSales: item?.TotalSales
          ? "$" + (item?.TotalSales || 0).toFixed()
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
      <div className="tab-pane fadeIn active" id="tab-5">
        <div className="px-3 pt-3 pb-2 d-flex justify-content-end">
          <div style={{ marginLeft: "10px" }}>
            <div className="input-group w-250">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                title="Search"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                setPage(1);
                productReportsFilterSubmitHandler();
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
                    generateXLSX(
                      productReports?.productReports,
                      `Product Report`,
                      [
                        {
                          key: "productId",
                          header: "Product Id",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "productName",
                          header: "Product name",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "brandName",
                          header: "Brand name",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "categoryName",
                          header: "Category name",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "price",
                          header: "Price",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "discount",
                          header: "Discount",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "noOfOrders",
                          header: "No. of Orders",
                          style: { alignment: { horizontal: "left" } },
                        },
                        {
                          key: "totalSales",
                          header: "Total Sales",
                          style: { alignment: { horizontal: "left" } },
                        },
                      ]
                    )
                  }
                >
                  <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                </Dropdown.Item>
                <CSVLink
                  className="dropdown-item"
                  data={productReports?.productReports?.map((report: any) => ({
                    ...report,
                    productId: report?.products_id ? report?.products_id : "-",
                    productName: report?.products_name
                      ? report?.products_name
                      : "-",
                    noOfOrders: report?.TotalOrder ? report?.TotalOrder : "-",
                    totalSales: report?.TotalSales
                      ? "$" + (report?.TotalSales || 0).toFixed()
                      : "-",
                  }))}
                  headers={headers}
                  filename={`Product Report`}
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
          ItemsComponent={ProductReportsList}
          pageCount={productReports?.count || 0}
          page={page}
          setPage={setPage}
          dispatchAction={fetchProductsReports}
        />
      </div>
    </Report>
  );
};

export default ProductReports;
