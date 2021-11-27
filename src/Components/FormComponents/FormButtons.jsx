/*
   Editted Mark's component to display Order Page Information
   Last worked on: 10/14/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
   
   Component that displays Form Button. Removed Cancel Button.
   Last worked on: 11/8/21 by Mark Cortez, ID 58
*/

import React from 'react';


function FormButtons(props) {
    return (
        <div>
            <div className="px-4 py-3 text-right sm:px-6">
                <button
                    onClick={props.onSubmit}
                    type="submit"
                    className="inline-flex justify-center mr-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default FormButtons;