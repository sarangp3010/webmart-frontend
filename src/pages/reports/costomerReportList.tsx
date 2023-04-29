import React from "react";
import { useSelector } from "react-redux";

import { BarsLoader } from "../../components/loader/loader";
import TRootState from "../../store/root.types";

interface Prop {
  setFilter: Function;
  filter: string;
}

const CustomerReportsList: React.FC<Prop> = ({ filter, setFilter }) => {
  const customers = useSelector(
    (state: TRootState) => state?.report?.customerData
  );
  const loading = useSelector((state: TRootState) => state?.report?.loading);

  return (
    <div className="table-responsive">
      <table className="table table-hover m-0">
        <thead>
          <tr>
            <th>First name</th>
            <th className="text-center">Last name</th>
            <th className="text-center">Email Id</th>
            {/* <th className="text-center">Registration Date</th> */}
            <th className="text-center">Customer Status</th>
            <th className="text-center">No. of Orders</th>
            <th className="text-center">Total Amount Received</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                <BarsLoader />
              </td>
            </tr>
          ) : customers?.customers && customers?.customers.length > 0 ? (
            customers?.customers.map((re: any) => (
              <tr key={re.user_id || "-"}>
                <td>{re.user_first_name || "-"}</td>
                <td>{re.user_last_name || "-"}</td>
                <td>{re.user_email || "-"}</td>
                {/* <td>{moment(re.user_created_at).format("DD/MM/YYYY")}</td> */}

                <td className="text-center">
                  <i
                    className={`icon dripicons-${
                      +re.user_is_active
                        ? "checkmark text-success"
                        : "cross text-danger"
                    } font-size-20`}
                  ></i>
                </td>
                <td className="text-center">{re.TotalOrders || "-"}</td>
                <td className="text-center">
                  {re.TotalAmountPaid
                    ? "$" + Number(re?.TotalAmountPaid || 0).toFixed(2)
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                No Customer reports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerReportsList;
