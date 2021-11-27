
import React from 'react';
import { useState, useEffect } from 'react';
import AdminHeader from '../../Components/AdminHeader';
import Axios from 'axios';
import {EightColumnTable} from '../../Components/EightColumnTable';
import '../../Components/jquery.dataTables.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';
const $ = require('jquery');
$.DataTable = require('datatables.net');




export default function Home (props){ 
    const [quoteNumber,setQuoteNumber]=useState('');
    // const [compMemberId,setComp_Members_id]=useState('');
    // const [quoter]=useState('');
    // const [theDate]=useState('');
    // const [company]=useState('');
    // const [contact,setContact]=useState('');
    // const [description]=useState('');
    // const [quoteStatus, setQuoteStatus]=useState('');
    const [memberList, setMemberList] = useState([]);
    //const data = []
  
    //console.log(data);
    console.log(memberList.map(Object.values));
    useEffect(() => {
      Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getQuote").then(
        (Response) => {
          setMemberList(Response.data);
        }
      );
    }, [])
    
    // const submitMembers = () => {
    //   window.location.reload(false);
    //   Axios.post("http://localhost:3001/api/insertQuote",{
    //     quoteNumber:quoteNumber,
    //     company:company,
    //     contact:contact,
    //     theDate:theDate,
    //     quoter:quoter,
    //     description:description,
    //   }).then(()=>{
    //     alert("Succesful insert")
    //   })
    // };



  
 
var table= $('#quoteTable').DataTable({
  responsive:true,
  retrieve:true,
 data: memberList.map(Object.values),
  columns:[
    {title:"Quote"},
    {title:"Company"},
    {title:"Contact"},
    {title:"Date"},
    {title:"Quoter"},
    {title:"Description"},

    {title: "To Quote",
    render:function(data,type,row){
      return ('<div> <a href="Create-a-Quote"> To Quote </a> </div>');
    },
  },
    {title: "To Order",
      render:function(data,type,row){
       // return '<button><a href="/admin/Order">To order</a></button>';
       return ('<div> <a href="Order"> To Order </a> </div>');
     //  return '<Link to="/admin/Quote-history" className="btn btn-primary">Sign up</Link>'
     //return '<Link to="/Admin/Orders"> Orders</Link>';
     //return <button><Link to="/Admin/Employees"className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"style={{ textDecoration: "none" }}>Cancel</Link></button>;

      },
    }

  ]

});

$('#quoteTable tbody').on('click','button',function(){
  var data= table.row($(this).parents('tr')).data();
  //send data to quote or order
  //alert(data[0]+data[1]);
//<Link to={"/admin/Create-a-Quote"+data[0]}>to quote</Link>
localStorage.setItem(data[0], true);
//const cat =localStorage.getItem(data[0]);
//console.log(cat);
//<Link to="/Admin/Employees" className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"style={{ textDecoration: "none" }}>Cancel</Link>;

})



      return (
        <div>
          <AdminHeader name= "Quote History" PageName="Admin" PageLocation="Admin's Quote History Page"></AdminHeader>
          <br />
          <table class="display" width="100%" table id="quoteTable" ></table>

          
          
           {/* {<EightColumnTable className= "text-center"  wait={3000} data={memberList.map(Object.values)} 
            FirstColumnName="QUOTE#"
            SecondColumnName="COMPANY"
            ThirdColumnName="CONTACT"
            FourthColumnName="DATE"
            FifthColumnName="QUOTER"
            SixthColumnName="DESCRIPTION"
            SeventhColumnName="TO QUOTE"
            DataColumnName="TO ORDER"
            // dataColumnSeven="{data:null, render:function(data,type,row){return'<button>to quote</button>'}}"
            ></EightColumnTable> } */}
        </div>
      );
    
  }