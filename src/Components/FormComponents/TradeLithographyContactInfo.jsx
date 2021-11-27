/*
   Editted Mark's component to display Order Page Information
   Last worked on: 10/14/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/
import React from 'react';

function TradeLithographyContactInfo() {
    return (
        <div className="md:col-span-1 pb-4">
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Trade Lithography</h3>
                <p className="mt-1 text-sm text-gray-600">
                    720 Harbour Way South <br></br>
                    South Richmond, CA 94804 <br></br>
                    PHONE: (510) 965-6501<br></br>
                    FAX:(510) 965-6502<br></br>
                    NIGHTLINE: (510) 965-6503<br></br>
                </p>
            </div>
        </div>
    )
}
export default TradeLithographyContactInfo;