/*
   Component that displays Printing Information.
   Last worked on: 10/17/21 by Mark Cortez, ID 46
*/
import React from 'react';

const PrintStyleInformation = (props) => {
    return (
        <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="ink" className="block text-sm font-medium text-gray-700">
                    Ink
                </label>
                <input
                    type="text"
                    name="ink"
                    id="ink"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("ink")}
                />
            </div>        

            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="black" className="block text-sm font-medium text-gray-700">
                    Black
                </label>
                <input
                    type="text"
                    name="black"
                    id="black"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("black")}
                />
            </div>       

            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="fcp" className="block text-sm font-medium text-gray-700">
                    4/C Process
                </label>
                <input
                    type="text"
                    name="fcp"
                    id="fcp"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("fcp")}
                />
            </div>       

            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="pms" className="block text-sm font-medium text-gray-700">
                    PMS
                </label>
                <input
                    type="text"
                    name="pms"
                    id="pms"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("pms")}
                />
            </div>       

            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="aqu" className="block text-sm font-medium text-gray-700">
                    Aqu
                </label>
                <input
                    type="text"
                    name="aqu"
                    id="aqu"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("aqu")}
                />
            </div>       

            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="vdp" className="block text-sm font-medium text-gray-700">
                    Var
                </label>
                <input
                    type="text"
                    name="vdp"
                    id="vdp"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("vdp")}
                />
            </div>       

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="coverage" className="block text-sm font-medium text-gray-700">
                    Coverage
                </label>
               <select
                    id="coverage"
                    name="coverage"
                    autoComplete="coverage"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("coverage")}
                >
                    <option> </option>
                    <option>Light </option>
                    <option>Medium</option>
                    <option>Heavy</option>
               </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="bleed" className="block text-sm font-medium text-gray-700">
                    Bleeds
                </label>
               <select
                    id="bleed"
                    name="bleed"
                    autoComplete="bleed"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("bleed")}
                >   
                    <option> </option>
                    <option>Yes</option>
                    <option>No</option>
               </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="sides" className="block text-sm font-medium text-gray-700">
                    Sides
                </label>
               <select
                    id="sides"
                    name="sides"
                    autoComplete="sides"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("sides")}
                >
                    <option> </option>
                    <option>1</option>
                    <option>2</option>
               </select>
            </div>

            <div className="col-span-2 sm:col-span-4">
                <label htmlFor="flat" className="block text-sm font-medium text-gray-700">
                    Flat Size
                </label>
                <input
                    type="text"
                    name="flat"
                    id="flat"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("flat")}
                />
            </div>      
            <div className="col-span-2 sm:col-span-4">
                <label htmlFor="finishedSize" className="block text-sm font-medium text-gray-700">
                    Finished Size
                </label>
                <input
                    type="text"
                    name="finishedSize"
                    id="finishedSize"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("finishedSize")}
                />
            </div>      
            <div className="col-start-1 col-end-4">
                <label htmlFor="page" className="block text-sm font-medium text-gray-700">
                    # Of Pages
                </label>
                <input
                    type="text"
                    name="page"
                    id="page"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("page")}
                />
            </div>      
            <div className="col-start-5 col-end-8">
                <label htmlFor="pluscover" className="block text-sm font-medium text-gray-700">
                    Plus Cover
                </label>
                <input
                    type="text"
                    name="pluscover"
                    id="pluscover"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("pluscover")}
                />
            </div>      
            <div className="col-start-9 col-end-12">
                <label htmlFor="selfcover" className="block text-sm font-medium text-gray-700">
                    Self Cover
                </label>
                <input
                    type="text"
                    name="selfcover"
                    id="selfcover"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("selfcover")}
                />
            </div>      

            <div className="col-start-1 col-end-4">
                <label htmlFor="proof-trade" className="block text-base font-medium text-gray-700">
                    Proofs by Trade Lithography
                </label>
            </div>

            <div className="col-start-4 col-end-12">
                <label htmlFor="suppliedcolor" className="block text-sm font-medium text-gray-700">
                    Color
                </label>
                <input
                    type="text"
                    name="suppliedcolor"
                    id="suppliedcolor"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("suppliedcolor")}                        
                />
            </div>   

            <div className="col-start-1 col-end-4">
                <label htmlFor="proof-cust" className="block text-base font-medium text-gray-700">
                    Proofs Supplied by Customer
                </label>
            </div>

            <div className="col-start-4 col-end-12">
                <label htmlFor="colorTwo" className="block text-sm font-medium text-gray-700">
                    Color
                </label>
                <input
                    type="text"
                    name="colorTwo"
                    id="colorTwo"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     {...props.reg("colorTwo")}                    
               />
            </div>   

            <div className="col-start-1 col-end-1">
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock
                </label>
            </div>
            <div className="col-start-2 col-end-6">
                <label htmlFor="stocktext" className="block text-sm font-medium text-gray-700">
                    Text
                </label>
                <input
                    type="text"
                    name="stocktext"
                    id="stocktext"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     {...props.reg("stocktext")}                        
                />
            </div>   
            <div className="col-start-7 col-end-11">
                <label htmlFor="stockcover" className="block text-sm font-medium text-gray-700">
                    Cover
                </label>
                <input
                    type="text"
                    name="stockcover"
                    id="stockcover"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("stockcover")}    
                />
            </div>   
            <div className="col-start-1 col-end-4">
                <label htmlFor="stocksupplied" className="block text-sm font-medium text-gray-700">
                    Stock Supplied By Whom
                </label>
               <select
                    id="stocksupplied"
                    name="stocksupplied"
                    autoComplete="stocksupplied"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     {...props.reg("stocksupplied")}    
                >
                    <option>Customer</option>
                    <option>Trade Lithography</option>
               </select>
            </div>             
        </div>
    )
}

export default PrintStyleInformation;