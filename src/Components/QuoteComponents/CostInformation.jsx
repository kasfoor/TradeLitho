/*
   Component that displays Cost Information.
   Last worked on: 10/17/21 by Mark Cortez, ID 46
*/

import React from 'react';

const CostInformation = (props) => {

    return(
        <div className=" mt-8 grid grid-cols-5 gap-1">

            <div className="col-start-1 col-end-2">
                Quantity
                    <input
                        type="text"
                        name="quant"
                        id="quant"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("quant")}
                    />
                </div>
            
            <div className="col-start-2 col-end-3">
                Price
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("price")}
                    />
            </div>

            <div className="col-start-4 col-end-5">
                Text
                    <input
                        type="text"
                        name="costTxtOne"
                        id="costTxtOne"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costTxtOne")}
                    />
            </div>

            <div className="col-start-5 col-end-6">
                Cover
                    <input
                        type="text"
                        name="costCoverOne"
                        id="costCoverOne"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costCoverOne")}
                    />
            </div>


            <div className="col-start-1 col-end-2">
                    <input
                        type="text"
                        name="quantTwo"
                        id="quantTwo"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("quantTwo")}
                    />
                </div>
            
            <div className="col-start-2 col-end-3">
                    <input
                        type="text"
                        name="priceTwo"
                        id="priceTwo"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("priceTwo")}
                    />
            </div>

            <div className="col-start-4 col-end-5">
                    <input
                        type="text"
                        name="costTextTwo"
                        id="costTextTwo"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costTextTwo")}
                    />
            </div>

            <div className="col-start-5 col-end-6">
                    <input
                        type="text"
                        name="costCoverTwo"
                        id="costCoverTwo"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costCoverTwo")}
                    />
            </div>

                            
            <div className=" ml-3 mt-3 col-start-1 col-end-2">
                <label htmlFor="stockSize" className="block text-base font-medium text-gray-700">
                    Stock Size
                </label>
            </div>
            <div className="col-start-2 col-end-3">
                    <input
                        type="text"
                        name="stockSize"
                        id="stockSize"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("stockSize")}
                    />
            </div>
            <div className="col-start-4 col-end-5">
                    <input
                        type="text"
                        name="costTextThree"
                        id="costTextThree"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costTextThree")}
                    />
            </div>

            <div className="col-start-5 col-end-6">
                    <input
                        type="text"
                        name="costCoverThree"
                        id="costCoverThree"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("costCoverThree")}
                    />
            </div>

        </div>


    )
}

export default CostInformation;