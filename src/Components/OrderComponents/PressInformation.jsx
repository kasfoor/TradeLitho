/*
   Component that displays Press Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react'

function PressInformation(props) {
    return (
        <div>
            {/*Press*/}
            <label htmlFor="prepress" className="mt-8 block text-lg font-bold text-gray-700">
                PRESS
            </label>
            <div className="grid grid-cols-7 gap-7">
                <div className="col-span-1">
                    <label htmlFor="ink-front" className="block text-sm font-medium text-gray-700">
                        Ink Front
                    </label>
                    <select
                        id="ink-front-type"
                        name="ink-front-type"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option></option>
                        <option>K</option>
                        <option>4C</option>
                    </select>
                    <input
                        type="text"
                        name="ink-front"
                        id="ink-front"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="ink-back" className="block text-sm font-medium text-gray-700">
                        Ink Back
                    </label>
                    <select
                        id="ink-back-type"
                        name="ink-back-type"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option></option>
                        <option>K</option>
                        <option>4C</option>
                    </select>
                    <input
                        type="text"
                        name="ink-back"
                        id="ink-back"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="press-number" className="block text-sm font-medium text-gray-700">
                        Press
                    </label>
                    <select
                        id="press-number"
                        name="press-number"
                        autoComplete="press-number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>240</option>
                        <option>528</option>
                        <option>540</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <label htmlFor="net-sheet" className="block text-sm font-medium text-gray-700">
                        Net Sheets
                    </label>
                    <input
                        type="text"
                        name="net-sheet"
                        id="net-sheet"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="overs" className="block text-sm font-medium text-gray-700">
                        Overs
                    </label>
                    <input
                        type="text"
                        name="overs"
                        id="overs"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="total-sheets" className="block text-sm font-medium text-gray-700">
                        Total Sheets
                    </label>
                    <input
                        type="text"
                        name="total-sheets"
                        id="total-sheets"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="finished-count" className="block text-sm font-medium text-gray-700">
                        Finished Count
                    </label>
                    <input
                        type="text"
                        name="finished-count"
                        id="finished-count"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("finished-coun")}
                    />
                </div>

            </div>
        </div>
    );
}

export default PressInformation