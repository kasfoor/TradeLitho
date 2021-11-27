/*
   Component that displays Stock Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react'

function StockInformation(props) {
    return (
        <div>
            {/*Stock*/}
            <label htmlFor="stock" className="mt-8 block text-lg font-bold text-gray-700">
                STOCK
            </label>
            <div className="grid grid-cols-7 gap-7">
                <div className="col-span-1">
                    <input
                        type="text"
                        name=" "
                        id=" "
                        className="mt-4 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="a" className="block text-sm font-medium text-gray-700">
                        Shts
                    </label>
                    <input
                        type="text"
                        name="a"
                        id="a"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="b" className="block text-sm font-medium text-gray-700">
                        -
                    </label>
                    <input
                        type="text"
                        name="b"
                        id="b"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="sub" className="block text-sm font-medium text-gray-700">
                        Sub
                    </label>
                    <input
                        type="text"
                        name="sub"
                        id="sub"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="out" className="block text-sm font-medium text-gray-700">
                        Out=
                    </label>
                    <input
                        type="text"
                        name="out"
                        id="out"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="pcs" className="block text-sm font-medium text-gray-700">
                        Pcs
                    </label>
                    <input
                        type="text"
                        name="pcs"
                        id="pcs"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-3">
                    <label htmlFor="vendor" className="block text-sm font-medium text-gray-700">
                        Vendor
                    </label>
                    <input
                        type="text"
                        name="vendor"
                        id="vendor"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-1">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

            </div>
        </div>

    );
}

export default StockInformation