/*
   Component that displays Order Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/
import React from 'react';

function OrderInformation(props) {
    return (
        <div>
            {/*SOLD TO*/}
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2">
                    <label htmlFor="soldto" className="block text-lg font-bold text-gray-700">
                        SOLD TO
                    </label>
                    <input
                        type="text"
                        name="soldto"
                        id="soldto"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("soldto")}
                    />
                </div>
                <div className="col-span-4"></div>

                <div className="col-span-2">
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
                <div className="col-span-4"></div>

                <div className="col-span-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Street address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("address")}
                    />
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-2">
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

                <div className="col-span-2">
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

                <div className="col-span-2">
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                    </label>
                    <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        autoComplete="zipcode"
                        className="mt-1 block w-full py-2 px-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...props.reg("zipcode")}
                    />
                </div>

                <div className="col-span-2">
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

                <div className="col-span-2">
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

                <div className="col-span-2">
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

                <div className="col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("email")}
                    />
                </div>
                <div className="col-span-2"></div>

                <div className="col-span-2">
                    <label htmlFor="jobnumber" className="block text-lg font-bold text-gray-700">
                        JOB NUMBER
                    </label>
                    <input
                        type="text"
                        name="jobnumber"
                        id="jobnumber"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("jobnumber")}
                    />
                </div>
                <div className="col-span-4"></div>

                <div className="col-span-2">
                    <label htmlFor="orderdate" className="block text-sm font-medium text-gray-700">
                        Order Date
                    </label>
                    <input
                        type="text"
                        name="orderdate"
                        id="orderdate"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("orderdate")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="ordership" className="block text-sm font-medium text-gray-700">
                        Date Shipped
                    </label>
                    <input
                        type="text"
                        name="ordership"
                        id="ordership"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("ordership")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="orderdue" className="block text-sm font-medium text-gray-700">
                        Job Due
                    </label>
                    <input
                        type="text"
                        name="orderdue"
                        id="orderdue"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("orderdue")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="customerordernumber" className="block text-sm font-medium text-gray-700">
                        Customer Order Number
                    </label>
                    <input
                        type="text"
                        name="customerordernumber"
                        id="customerordernumber"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("customerordernumber")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="pj" className="block text-sm font-medium text-gray-700">
                        P J
                    </label>
                    <input
                        type="text"
                        name="pj"
                        id="pj"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("pj")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="quotenumber" className="block text-sm font-medium text-gray-700">
                        Quoted
                    </label>
                    <input
                        type="text"
                        name="quotenumber"
                        id="quotenumber"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("quotenumber")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="stockin" className="block text-sm font-medium text-gray-700">
                        STOCK IN
                    </label>
                    <input
                        type="text"
                        name="stockin"
                        id="stockin"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("stockin")}
                    />
                </div>
                <div className="col-span-4"></div>

                <div className="col-span-6">
                    <label htmlFor="final-cost" className="block text-sm font-medium text-gray-700">
                        FINAL COST
                    </label>
                    <input
                        type="text"
                        name="final-cost"
                        id="final-cost"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...props.reg("final-cost")}
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="extra" className="block text-sm font-medium text-gray-700">
                        Extra
                    </label>
                    <div className="mt-1">
                        <textarea
                            type="text"
                            name="extra"
                            id="extra"
                            className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            {...props.reg("extra")}
                        />
                    </div>
                </div>
                <div className="col-span-4"> </div>

                <div className="col-span-2">
                    <label htmlFor="quantity-order" className="block text-sm font-medium text-gray-700">
                        QUANTITY ORDER
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="quantity-order"
                            id="quantity-order"
                            className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            {...props.reg("quantity-order")}
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <label htmlFor="items" className="block text-sm font-medium text-gray-700">
                        ITEM(S)
                    </label>
                    <div className="mt-1">
                        <textarea
                            type="text"
                            name="items"
                            id="items"
                            className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            {...props.reg("items")}
                        />
                    </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div className="mt-1">
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            {...props.reg("description")}
                        />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default OrderInformation;