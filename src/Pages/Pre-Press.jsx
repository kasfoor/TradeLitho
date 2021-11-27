import {useState, useEffect} from 'react';
import Axios from 'axios'
import PrePressHeader from '../Components/SingleButtonHeader';
import {FiveColumnTable} from '../Components/FiveColumnTable';

function PrePress() {
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
        <PrePressHeader
          name="Pre-Press"
          PageName="Pre-Press"
          PageLocation="Pre-Press Page"
        ></PrePressHeader>
        <br />
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

export default PrePress;