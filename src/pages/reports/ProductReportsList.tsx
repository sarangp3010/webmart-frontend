import React from "react";
import { useSelector } from "react-redux";
import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

const ProductReportsList = () => {
  const productReports = useSelector(
    (state: TRootState) => state?.report?.productData
  );
  const loading = useSelector((state: TRootState) => state?.report?.loading);
  return (
    <div className="table-responsive">
      <table className="table table-hover m-0">
        <thead>
          <tr>
            <th>Id</th>
            <th className="text-center">Name</th>
            <th className="text-center">Brand</th>
            <th className="text-center">Category</th>
            <th className="text-center">Price</th>
            <th className="text-center">Discount</th>
            <th className="text-center">No. of Orders</th>
            <th className="text-center">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                <BarsLoader />
              </td>
            </tr>
          ) : productReports?.productReports &&
            productReports?.productReports?.length > 0 ? (
            productReports?.productReports?.map(
              (report: any, index: number) => (
                <tr key={index}>
                  <td>{report?.products_id || "-"}</td>
                  <td className="text-center">
                    {report?.products_name || "-"}
                  </td>
                  <td className="text-center">{report?.brand_name || "-"}</td>
                  <td className="text-center">
                    {report?.category_type || "-"}
                  </td>
                  <td className="text-center">
                    {report?.products_price
                      ? "$" + (report?.products_price || 0).toFixed(2)
                      : "-"}
                  </td>
                  <td className="text-center">
                    {report?.products_discount
                      ? "$" + (report?.products_discount || 0).toFixed(2)
                      : "-"}
                  </td>
                  <td className="text-center">{report?.TotalOrder || "-"}</td>
                  <td className="text-center">
                    {report?.TotalSales
                      ? "$" + (report?.TotalSales || 0).toFixed(2)
                      : "-"}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No Product reports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductReportsList;
