/* 
   Page that allows customer to create quote.
   Last worked on: 10/10/21 by Mark Cortez, Sprint 7: ID24, Componentalizing UI Code
*/

import React from 'react';
import AdminHeader from '../../Components/AdminHeader';
import QuoteForm from '../../Components/QuoteComponents/QuoteForm';
function CreateQuote() {
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

    return (
      <div className="bg-gray-300">
        <div className="bg-gray-200">
          <AdminHeader
            name="Admin"
            PageName="Admin"
            PageLocation="Admin's Create a Quote Page"
          ></AdminHeader>
        </div>

        {/* <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div> */}
        <QuoteForm />

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>
    );
}

export default CreateQuote;