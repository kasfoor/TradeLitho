import React, { useState,useEffect } from 'react';
import BillingAndInvoiceHeader from '../Components/SingleButtonHeader';
import Axios from 'axios';
import {TenColumnTable} from '../Components/TenColumnTable';

export default function BillingandInvoice(props) {
    const [billingInvoiceList, setBillingInvoiceList] = useState([]);


    useEffect(() => {
        Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getBilling-Invoice").then(
          (Response) => {
            setBillingInvoiceList(Response.data);
          }
        );
      }, [])

    
    return (
        <div>
            <BillingAndInvoiceHeader name= "Billing and Invoice" PageName="Billing and Invoice" PageLocation="Billing and Invoice Page"></BillingAndInvoiceHeader>
            <br />
            <TenColumnTable class="text-center" wait={1000} data={billingInvoiceList.map(Object.values)}
            FirstColumnName="Job Number"
            SecondColumnName="Company"
            ThirdColumnName="Address"
            FourthColumnName="City"
            FifthColumnName="States"
            SixthColumnName="Zipcode"
            SeventhColumnName="Phone"
            EighthColumnName="Email"
            NinthColumnName="Contact"
            TenthColumnName="Items"
            ></TenColumnTable>
        </div>
    )
}

