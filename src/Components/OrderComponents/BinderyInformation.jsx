/*
   Component that displays Bindery Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react';

function BinderyInformation(props) {
    return (
        <div>
            {/*Bindery*/}
            <label htmlFor="bindery" className="mt-8 block text-lg font-bold text-gray-700">
                BINDERY
            </label>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-3">
                    <label htmlFor="bindery-count" className="block text-sm font-medium text-gray-700">
                        Bindery Count
                    </label>
                    <input
                        type="text"
                        name="bindery-count"
                        id="bindery-count"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-3"></div>

                <div className="col-span-3">
                    <label htmlFor="bindery" className="block text-sm font-medium text-gray-700">
                        Bindery
                    </label>
                    <input
                        type="text"
                        name="bindery"
                        id="bindery"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

            </div>
        </div>
    )
}

export default BinderyInformation;