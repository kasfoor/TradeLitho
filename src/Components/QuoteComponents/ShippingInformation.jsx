/*
   Component that displays Customer Quote Information.
   Last worked on: 10/17/21 by Mark Cortez, ID 46
*/

import React from 'react';

const ShippingInformation = (props) => {
    return(
        <div>
            <div className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-start-1 col-end-3">
                    <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">
                        Packaging
                    </label>
                    <select
                            id="packaging"
                            name="packaging"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...props.reg("packaging")}
                        >
                            <option> </option>
                            <option>Bulk Carton</option>
                            <option>Skid Pack</option>
                            <option>Shrink Wrap</option>
                    </select>
                </div>      

                <div className="col-start-3 col-end-12">
                    <label htmlFor="packingdescription" className="block text-sm font-medium text-gray-700">
                        Packaging Description
                    </label>
                    <input
                        type="text"
                        name="packingdescription"
                        id="packingdescription"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("packagingdescription")}
                    />
                </div>   


                <div className="col-start-1 col-end-6">
                    <label htmlFor="otherpackaging" className="block text-sm font-medium text-gray-700">
                        Other Packaging
                    </label>
                    <input
                        type="text"
                        name="otherpackaging"
                        id="otherpackaging"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("otherpackaging")}
                    />
                </div>     

                <div className="col-start-1 col-end-4">
                    <label htmlFor="delivery" className="block text-sm font-medium text-gray-700">
                        Delivery
                    </label>
                        <select
                            id="delivery"
                            name="delivery"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...props.reg("delivery")}
                        >
                            <option>FOB Trade Lithography</option>
                            <option>FOB Location</option>
                            <option> </option>
                        </select>
                </div>    
                <div className="col-start-4 col-end-12">
                    <label htmlFor="deliverydescription" className="block text-sm font-medium text-gray-700">
                        Delivery Description
                    </label>
                    <input
                        type="text"
                        name="deliverydescription"
                        id="deliverydescription"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("deliverydescription")}
                   />
                </div>
            </div>
        </div>
    )
}

export default ShippingInformation;