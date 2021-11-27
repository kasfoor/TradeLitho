import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import Axios from "axios";
import { FourColumnTable } from "../../Components/FourColumnTable";

export default function Clients(props) {
  const [clientList, setClientList] = useState([]);


  useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_PATH +"/api/getClients").then((Response) => {
      setClientList(Response.data);
    });
  }, []);


  return (
    <div>
      <AdminHeader
        name="Admin"
        PageName="Admin"
        PageLocation="Admin's Client Page"
      ></AdminHeader>
      <br />
      <FourColumnTable
        class="text-center"
        wait={1000}
        data={clientList.map(Object.values)}
        firstColumnName="Company"
        secondColumnName="Contact Name"
        thirdColumnName="City"
        fourthColumnName="Phone"
      ></FourColumnTable>
    </div>
  );
}
