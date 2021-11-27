/*
   Component that displays Customer Quote Information.
   Last worked on: 10/17/21 by Mark Cortez, ID 46
*/

import React from 'react';

const BinderyInformation = (props) => {
    return(
        <div className="mt-8 grid grid-cols-6 gap-6">
            <div className=" ml-12 mt-4 col-start-1 col-end-1">
                <label htmlFor="bindery"className="block text-base font-medium text-gray-700">
                    Bindery
                </label> 
            </div>

            <div className="col-start-2 col-end-2">
                <label htmlFor="cut" className="block text-sm font-medium text-gray-700">
                    Cut
                </label>
                <input
                    type="text"
                    name="cut"
                    id="cut"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("cut")}
                />
            </div>        

            <div className="col-start-3 col-end-3">
                <label htmlFor="score" className="block text-sm font-medium text-gray-700">
                    Score
                </label>
                <input
                    type="text"
                    name="score"
                    id="score"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("score")}
                />
            </div>       

            <div className="col-start-4 col-end-4">
                <label htmlFor="perf" className="block text-sm font-medium text-gray-700">
                    Perf
                </label>
                <input
                    type="text"
                    name="perf"
                    id="perf"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("perf")}
                />
            </div>       

            <div className="col-start-5 col-end-5">
                <label htmlFor="fold" className="block text-sm font-medium text-gray-700">
                    Fold
                </label>
                <input
                    type="text"
                    name="fold"
                    id="fold"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("fold")}
                />
            </div>       

            <div className="col-start-6 col-end-6">
                <label htmlFor="stitch" className="block text-sm font-medium text-gray-700">
                    Stitch
                </label>
                <input
                    type="text"
                    name="stitch"
                    id="stitch"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("stitch")}
                />
            </div>

            <div className="col-start-1 col-end-6">
                <label htmlFor="otherbindery"className="block text-sm font-medium text-gray-700">
                    Other Bindery
                </label> 
                <input
                    type="text"
                    name="otherbindery"
                    id="otherbindery"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...props.reg("otherbindery")}
                />
            </div>       
        </div>       
    )
}

export default BinderyInformation;