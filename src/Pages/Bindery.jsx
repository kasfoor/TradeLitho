import { useState, useEffect } from "react";
import BinderyHeader from '../Components/SingleButtonHeader.jsx';
import Axios from "axios";
import { FiveColumnTable } from "../Components/FiveColumnTable";


function Bindery() {
      const [binderyList, setBinderyList] = useState([]);

      useEffect(() => {
        Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getPrePress").then(
          (Response) => {
            setBinderyList(Response.data);
          }
        );
      }, []);
      
    return (
        
      <div>
        <BinderyHeader
          name="Bindery"
          PageName="Bindery"
          PageLocation="Bindery Page"
        ></BinderyHeader>
        <br />
        <FiveColumnTable
          class="text-center"
          wait={1000}
          data={binderyList.map(Object.values)}
          FirstColumnName="Job Number"
          SecondColumnName="Company"
          ThirdColumnName="Contact"
          FourthColumnName="Customer Order"
          FifthColumnName="Priority"
        ></FiveColumnTable>
      </div>
    );
}

 
export default Bindery;