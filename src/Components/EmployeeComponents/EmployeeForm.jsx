/*
   Renders other components necessary to display Employee Page
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: IDxx, Display a Table of Employees
*/

import React from 'react';
import EmployeeTable from '../EmployeeComponents/EmployeeTable'


function EmployeeForm() {
    return (
        <div className="mt-10 sm:mt-0 px-10">
            <div className="my-5 md:mt-0 md:col-span-3 xl:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <form action="#" method="POST">
                        <EmployeeTable />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EmployeeForm;