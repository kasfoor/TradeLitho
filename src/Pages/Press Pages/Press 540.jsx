import PressHeader from '../../Components/PressHeader';
import { useState, useEffect } from "react";
import Axios from "axios";
import { FiveColumnTable } from "../../Components/FiveColumnTable";

function Press540() {
  const [prePressList, setPrePressList] = useState([]);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getPrePress").then(
      (Response) => {
        setPrePressList(Response.data);
      }
    );
  }, []);
    
    return (
      <div>
        <PressHeader
          name="Press"
          PageName="Press 540"
          PageLocation="Press 540"
        ></PressHeader>
        <FiveColumnTable
          class="text-center"
          wait={1000}
          data={prePressList.map(Object.values)}
          FirstColumnName="Job Number"
          SecondColumnName="Company"
          ThirdColumnName="Contact"
          FourthColumnName="Customer Order"
          FifthColumnName="Priority"
        ></FiveColumnTable>
      </div>
    );
}

export default Press540;