/*
   Simplified UI Code by making components.
   Last worked on: 10/14/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react'
import AdminHeader from '../../Components/AdminHeader'
import OrderForm from '../../Components/OrderComponents/OrderForm';

// const [values, setValues] = useState({
//     quoteNumber: "",
//     quoter: "",
//     quoteDate: "",
//     quoteTime: "",
//     company: "",
//     customerContact: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "",
//     mobile: "",
//     fax: "",
//     email: "",

// });

function Order() {

    return (
        <div className="bg-gray-300">
            <div className="bg-gray-200">
                <AdminHeader name="Admin" PageName="Admin" PageLocation="Admin's Order Page"></AdminHeader>
            </div>

            <OrderForm />

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </div>

    );
}
export default Order;