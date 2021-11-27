/*
   Component that renders quote information needed for the Create-a-Quote Page.
   Last worked on: 11/11/21 by Mark Cortez, ID 58/68: Quote Confirmation & Clear Form Inputs
*/

import React from 'react';
import { useForm } from "react-hook-form";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"
import axios from 'axios';
import moment from 'moment';
import FormButtons from '../FormComponents/FormButtons';
import TradeLithographyContactInfo from '../FormComponents/TradeLithographyContactInfo';
import QuoteInformation from './QuoteInformation';
import PrintStyleInformation from './PrintStyleInformation';
import BinderyInformation from './BinderyInformation';
import ShippingInformation from './ShippingInformation';
import CostInformation from './CostInformation';

function QuoteForm() {   
    const URL = 'http://localhost:3005'
    const {
        register, 
        handleSubmit, 
        errors
    } = useForm();
    
    // Function to confirm form submission.
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

    };

    // Function to handle and send form data to the back-end.
    const submitForm = (formData) => {
        console.log(formData);
        const getTime = moment().format();

        axios.post(URL + '/Admin/Create-a-Quote',
            {        
                quote_number: formData.quote_number ,
                comp_members_id	: "12345",
                quoter: formData.quoter,
                thedate	: formData.thedate,
                thetime: getTime,
                company: formData.company,
                contact: formData.contact,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                zipcode: formData.zipcode,
                phone: formData.phone,
                mobile: formData.mobile,
                fax: formData.fax,
                email: formData.email,
                description: formData.description,
                coverage: formData.coverage,
                bleed: formData.bleed,
                side: formData.side,
                flat: formData.flat,
                finishedsize:formData.finishedSize,
                page: formData.page,
                pluscover: formData.pluscover,
                selfcover: formData.selfcover,
                art: formData.art,
                artdescription: formData.artdescription,
                tradeline: formData.tradeline,
                tradecolor: formData.tradecolor,
                suppliedline:formData.suppliedLine,
                suppliedcolor:formData.suppliedcolor,
                stocktext: formData.stocktext,
                stockcover: formData.stockcover,
                stocksupplied: formData.stocksupplied,
                cut: formData.cut,
                score: formData.score,
                perf: formData.perf,
                fold: formData.fold,
                stitch: formData.stitch,
                otherbindery: formData.otherbindery,
                packaging: formData.packaging,
                packagingdescription: formData.packagingdescription,
                otherpackaging: formData.otherpackaging,
                delivery: formData.delivery,
                deliverydescription: formData.deliverydescription,
                stocksizetext: formData.stocksizetext,
                stocksizecover: formData.stocksizecover,
                quote_status: "1"      
            })
            .then(() => {
                console.log("test pass 2")
            })
        {document.getElementById('quote-form').reset()}
    }

    // Render
    return(
        <div className="mt-10 sm:mt-0 px-10">
            <div className="mt-5 md:mt-0 md:col-span-3 xl:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <form id="quote-form" onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                            <TradeLithographyContactInfo/>                   
                            <QuoteInformation reg={register} error={errors}/>
                            <PrintStyleInformation reg={register}/>
                            <BinderyInformation reg={register}/>
                            <ShippingInformation reg={register}/>
                            <CostInformation reg={register}/>
                            <FormButtons onSubmit={handleSubmit}/>
                        </form>
                    </div>
                </div>    
            </div>
        </div>

    )
}

export default QuoteForm;