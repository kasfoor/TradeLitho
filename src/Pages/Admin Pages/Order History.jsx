import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import { EightColumnTable } from "../../Components/EightColumnTable";
import Axios from "axios";

function OrderHistory() {
  const [billingInvoiceList, setBillingInvoiceList] = useState([]);

  useEffect(() => {
    Axios.get(
      process.env.REACT_APP_BACKEND_PATH + "/api/getOrder-History"
    ).then((Response) => {
      setBillingInvoiceList(Response.data);
    });
  }, []);

  return (
    <div className="">
      <AdminHeader
        name="Admin"
        PageName="Admin"
        PageLocation="Admin's Order History Page"
      ></AdminHeader>
      <br />
      <EightColumnTable
        class="text-center"
        wait={1000}
        data={billingInvoiceList.map(Object.values)}
        FirstColumnName="Order #"
        SecondColumnName="Company"
        ThirdColumnName="Description (Items)"
        FourthColumnName="Contact"
        FifthColumnName="Customer Order #"
        SixthColumnName="Quote #"
        SeventhColumnName="Ordered Date"
        EighthColumnName="Date Shipped"
      ></EightColumnTable>
    </div>
  );
}

export default OrderHistory;
