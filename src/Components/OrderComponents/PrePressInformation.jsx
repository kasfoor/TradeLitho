/*
   Component that displays Pre-Press Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react'

function PrePressInformation(props) {
    return (
        <div>
            {/*Pre-Press*/}
            <label htmlFor="prepress" className="mt-8 block text-lg font-bold text-gray-700">
                PRE-PRESS
            </label>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2">
                    <label htmlFor="prepressinstruction" className="block text-sm font-medium text-gray-700">
                        Pre-Press Instructions
                    </label>
                    <textarea
                        type="text"
                        name="prepressinstruction"
                        id="prepressinstruction"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("prepressinstruction")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="prepressacs" className="block text-sm font-medium text-gray-700">
                        A.C.'S
                    </label>
                    <textarea
                        type="text"
                        name="prepressacs"
                        id="prepressacs"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("prepressacs")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="prepresssupplied" className="block text-sm font-medium text-gray-700">
                        Customer Supplied
                    </label>
                    <textarea
                        type="text"
                        name="prepresssupplied"
                        id="prepresssupplied"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("prepresssupplied")}
                    />
                </div>
            </div>
        </div>
    );
}

export default PrePressInformation