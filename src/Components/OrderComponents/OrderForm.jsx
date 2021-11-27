/*
   Renders other components necessary to display Order Page Information
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: ID38, Simplifying and Componentalizaing UI Code
*/

/*
   Renders other components necessary to display Order Page Information
   Last worked on: 11/10/21 by Alex Keth, Sprint 8: ID51, Creating a functional submit button that POSTs to the backend
*/

import React from 'react';
import { useForm } from "react-hook-form";
import FormButtons from '../FormComponents/FormButtons';
import TradeLithographyContactInfo from '../FormComponents/TradeLithographyContactInfo';
import OrderInformation from './OrderInformation';
import PrePressInformation from './PrePressInformation'
import PressInformation from './PressInformation'
import StockInformation from './StockInformation'
import BinderyInformation from './BinderyInformation';
import ShippingInformation from './ShippingInformation';
import axios from 'axios';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'
import "react-confirm-alert/src/react-confirm-alert.css"

function OrderForm() {
    const URL = 'http://localhost:3005';
    const {
        register,
        handleSubmit,
        errors
    } = useForm();

    const onSubmit = (data) => {
        confirmAlert({
            title: "Confirm to Submit Quote",
            message: "Are you sure you want to submit?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => submitForm(data)
                },
                {
                    label: "No"
                }
            ]
        });
        //submitForm(data)
    }

    const submitForm = (formData) => {
        console.log(formData)
        const getTime = moment().format();


        axios.post(URL + '/Admin/Order',
            {
                order_number: formData.jobnumber,   //Matches Job Number
                comp_members_id: "10",
                soldto: formData.soldto,
                contact: formData.contact,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                zipcode: formData.zipcode,
                phone: formData.phone,
                mobile: formData.mobile,
                fax: formData.fax,
                email: formData.email,
                jobnumber: formData.jobnumber,
                orderdate: getTime,
                ordership: getTime,
                orderdue: getTime,
                customerordernumber: formData.jobnumber,
                pj: formData.pj,
                quotenumber: formData.quotenumber,
                stockin: formData.stockin,
                specialinstruction: formData.specialinstruction,
                extra: formData.extra,
                items: formData.items,
                prepressinstruction: formData.prepressinstruction,
                prepressacs: formData.prepressacs,
                prepresssupplied: formData.prepresssupplied,
                presssize: formData.presssize,
                presstrimsize: formData.presstrimsize,
                order_status: 0,
                prepress_status: 0,
                press240_status: 1,
                press528_status: 1,
                press540_status: 1,
                bindery_status: 0,
                invoice_status: 0,
                billing_status: 0,
                prepresspriority: 1000,
                priority240: 1000,
                priority528: 1000,
                priority540: 1000,
                binderypriority: 1000,
                shippingpriority: 1000,
                invoicepriority: 1000,
                billingpriority: 1000,
                shipping_status: 0,
            })
            .then(() => {
                console.log("test pass 2")
            })
    }



    return (
        <div className="mt-10 sm:mt-0 px-10">
            <div className="mt-5 md:mt-0 md:col-span-3 xl:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                            <TradeLithographyContactInfo />
                            <OrderInformation reg={register} />
                            <PrePressInformation reg={register} />
                            <PressInformation reg={register} />
                            <StockInformation reg={register} />
                            <BinderyInformation reg={register} />
                            <ShippingInformation reg={register} />
                            <FormButtons onSubmit={handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderForm;