import React,{useState,useEffect} from 'react';
import ShippingHeader from '../Components/SingleButtonHeader';
import {FiveColumnTable} from '../Components/FiveColumnTable';
import Axios from 'axios';


function Shipping() {
    const [shippingList, setShippingList] = useState([]);


    // console.log(data);
    // console.log(memberList.map(Object.values))
    useEffect(() => {
        Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getShipping").then((Response) => {
          setShippingList(Response.data)
        })
      }, [])

    return (
        <div>
            <ShippingHeader name= "Shipping" PageName="Shipping" PageLocation="Shipping Page"></ShippingHeader>
            <br />
            <FiveColumnTable class= "text-center"wait={1000} data={shippingList.map(Object.values)}
            FirstColumnName="Job number" 
            SecondColumnName="Company" 
            ThirdColumnName="Contact" 
            FourthColumnName="Customer order"
            FifthColumnName="Priority"
            ></FiveColumnTable>
        </div>
    )
}

export default Shipping;