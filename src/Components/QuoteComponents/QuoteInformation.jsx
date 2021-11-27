/*
   Component that displays Customer Quote Information.
   Last worked on: 10/24/21 by Mark Cortez, ID-55
*/

import React from 'react';
import GetTime from '../FormComponents/GetTime';
import GetDate from '../FormComponents/GetDate';

const QuoteInformation = (props) => {  
    return(
        <div>
            {/*Quote Number + Quoter */}
            <div className="grid grid-cols-6 gap-6">        
                <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="quote_number" className="block text-sm font-medium text-gray-700">
                        Quote Number
                    </label>
                    <input
                        type="number"
                        name="quote_number"
                        id="quote_number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("quote_number", {required:true})}                      
                    />
                </div>
                    <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="quoter" className="block text-sm font-medium text-gray-700">
                        Quoter
                    </label>
                    <input
                        type="text"
                        name="quoter"
                        id="quoter"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("quoter")}
                    />
                </div>

                {/*Date + Time*/}
                <div className="col-start-1 col-end-3">
                    <label htmlFor="thedate" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <GetDate reg={props.reg}/>
                </div>

                <div className="col-start-3 col-end-4 lg:col-span-2">
                    <label htmlFor="thetime" className="block text-sm font-medium text-gray-700">
                        Time
                    </label>
                    <GetTime reg={props.reg}/>
                </div>

                {/*Company + Contact*/}    
                <div className=" col-start-1 col-end-3 ">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company 
                    </label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("company")}
                    />
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                        Customer Contact
                    </label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("contact")}
                    />
                </div>

                {/*Address*/}
                <div className="col-span-5">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Company Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("address")}
                    />
                </div>

                {/*City + State + ZIP*/}
                <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("city")}
                    />
                </div>
                <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                    </label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("state")}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                    </label>
                    <input
                        type="number"
                        name="zipcode"
                        id="zipcode"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("zipcode")}
                    />
                </div>

                {/* Phone+Mobile+Fax */}
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("phone")}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                        Mobile
                    </label>
                    <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("mobile")}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
                        Fax
                    </label>
                    <input
                        type="text"
                        name="fax"
                        id="fax"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("fax")}
                    />
                </div>

                {/*Email*/}
                <div className="col-start-1 col-end-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("email")}
                    />
                </div>

                {/*Job Description*/}
                <div className="col-span-4 sm:col-span-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Job Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("description")}
                    />
                </div>                 
            </div>
        </div>
    )
}

export default QuoteInformation;