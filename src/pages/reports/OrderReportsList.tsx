import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { BarsLoader } from "../../components/loader/loader";

import TRootState from "../../store/root.types";

interface Prop {
  setFilter: Function;
  filter: string;
  setFilterBy: Function;
}
const OrderReportsList: React.FC<Prop> = ({
  setFilter,
  filter,
  setFilterBy,
}) => {
  const orderReports = useSelector(
    (state: TRootState) => state?.report?.orderData
  );
  const loading = useSelector((state: TRootState) => state?.report?.loading);
  return (
    <div className="table-responsive">
      <table className="table table-hover m-0">
        <thead>
          <tr>
            <th>Order Id</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Customer First Name</th>
            <th className="text-center">Customer Last Name</th>
            <th className="text-center">Customer Email</th>

            <th>Order Booked Date & Time</th>

            <th className="text-center">Product Name</th>
            <th className="text-right">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={11} style={{ textAlign: "center" }}>
                <BarsLoader />
              </td>
            </tr>
          ) : orderReports?.ordersReports &&
            orderReports?.ordersReports?.length > 0 ? (
            orderReports?.ordersReports?.map((order: any) => (
              <tr key={order?.orderDetails_id}>
                <td>{order?.orderDetails_id ? order?.orderDetails_id : "-"}</td>
                <td className="text-center">
                  {order?.orderDetails_quantity
                    ? order?.orderDetails_quantity
                    : "-"}
                </td>
                <td className="text-center">
                  {order?.user_first_name ? order?.user_first_name : "-"}
                </td>
                <td className="text-center">
                  {order?.user_last_name ? order?.user_last_name : "-"}
                </td>
                <td className="text-center">
                  {order?.user_email ? order?.user_email : "-"}
                </td>

                <td>
                  {order?.order_created_at
                    ? moment(order?.order_created_at).format(
                        "DD/MM/YYYY"
                      )
                    : "-"}
                  <br />
                  {order?.order_created_at
                    ? moment(order?.order_created_at).format("hh:mm A")
                    : "-"}
                </td>

                <td className="text-right">
                  {order?.product_name ? order?.product_name : "-"}
                </td>
                <td className="text-right">
                  {order?.orderDetails_grand_total
                    ? "$" + (order?.orderDetails_grand_total || 0).toFixed(2)
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={11} style={{ textAlign: "center" }}>
                No Order reports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReportsList;
