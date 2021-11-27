import React from 'react';
import AdminHeader from '../../Components/AdminHeader';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function OrderStatus() {
    const[orderNumber,setOrderNumber]=useState('');
    const[soldTo,setSoldTo]=useState('');
    const[companyList,setCompanyList]=useState([]);
    const [memberList, setMemberList] = useState([]);

    const data=[];

    console.log(data);
    console.log(memberList.map(Object.values));
    useEffect(() => {
      Axios.get("http://localhost:3001/api/getOrderStatus").then((Response) => {
        setMemberList(Response.data)
      })
    }, [])
    
    const submitMembers = () => {
      window.location.reload(false);
      Axios.post("http://localhost:3001/api/insertOrderStatus",{
        orderNumber:orderNumber,
        soldTo:soldTo,
      }).then(()=>{
        alert("Succesful insert")
      })
    };

  
      


    return (
        <div className="">
            <AdminHeader name= "Admin" PageName="Admin" PageLocation="Admin's Order Status Page"></AdminHeader>
            <button onClick={memberList}>show orders</button>
            {memberList.map(Object.values)}
           </div>
    )
}

export default OrderStatus;