/*
   Component that displays Shipping Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

import React from 'react';

function ShippingInformation(props) {
    return (
        <div>
            {/*Bindery*/}
            <label htmlFor="shipping" className="mt-8 block text-lg font-bold text-gray-700">
                SHIPPING
            </label>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2">
                    <label htmlFor="ship-to" className="block text-sm font-medium text-gray-700">
                        Ship To
                    </label>
                    <input
                        type="text"
                        name="ship-to"
                        id="ship-to"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-4"></div>

                <div className="col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-4"></div>

                <div className="col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                    </label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        name="zip-code"
                        id="zip-code"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">
                        Mobile
                    </label>
                    <input
                        type="text"
                        name="mobile-number"
                        id="mobile-number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-2">
                    <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
                        Fax
                    </label>
                    <input
                        type="text"
                        name="fax"
                        id="fax"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-2">
                    <label htmlFor="contact-info" className="block text-sm font-medium text-gray-700">
                        Contact
                    </label>
                    <input
                        type="text"
                        name="contact-info"
                        id="contact-info"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="will-call" className="block text-sm font-medium text-gray-700">
                        Will Call
                    </label>
                    <input
                        type="text"
                        name="will-call"
                        id="will-call"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="sample-too" className="block text-sm font-medium text-gray-700">
                        Sample To
                    </label>
                    <textarea
                        type="text"
                        name="sample-to"
                        id="sample-to"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-4"></div>

            </div>
        </div>

    )
}

export default ShippingInformation;