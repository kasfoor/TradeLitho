import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Schedule() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getEditorial").then(
      (Response) => {
        setData(Response.data);
      }
    );
  }, []);
  console.log(data);

  return (
    <div className="bg-schedule-BG bg-center bg-repeat-y h-screen w-screen relative">
      <div className="absolute inset-0 z-10 pt-10">
        <div className="border-4 border-black container bg-white">
          <h1 className="text-black block text-center font-extrabold text-6xl rounded">
            Trade Lithography Employee's Schedule
          </h1>
        </div>

        <div className="flex justify-center flex-wrap overflow-hidden text-center items-stretch content-center">
          <div className="bg-white border-4 border-black mx-1 my-6 px-6 w-1/3 overflow-hidden xl:my-5 xl:px-5 xl:w-1/6">
            <h3 className="text-3xl underline pt-1">Pre-Press</h3>
            <br></br>
            <div>
              {data
                .filter((val) => val.editorial_catagory_name === "prepress")
                .map((val) => {
                  return (
                    <div>
                      {val.editorial_id} | {val.editorial_header} |{" "}
                      {val.editorial_description}
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-white border-4 border-black mx-1 my-6 px-6 w-1/3 overflow-hidden xl:my-5 xl:px-5 xl:w-1/6">
            <h3 className="text-3xl underline pt-1">Press</h3>
            <br></br>
            <div>
              {data
                .filter((val) => val.editorial_catagory_name === "press")
                .map((val) => {
                  return (
                    <div>
                      {val.editorial_id} | {val.editorial_header} |{" "}
                      {val.editorial_description}
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-white border-4 border-black mx-1 my-6 px-6 w-1/3 overflow-hidden xl:my-5 xl:px-5 xl:w-1/6">
            <h3 className="text-3xl underline pt-1">Bindery</h3>
            <br></br>
            <div>
              {data
                .filter((val) => val.editorial_catagory_name === "bindery")
                .map((val) => {
                  return (
                    <div>
                      {val.editorial_id} | {val.editorial_header} |{" "}
                      {val.editorial_description}
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-white border-4 border-black mx-1 my-6 px-6 w-1/3 overflow-hidden xl:my-5 xl:px-5 xl:w-1/6">
            <h3 className="text-3xl underline pt-1">Shipping</h3>
            <br></br>
            <div>
              {data
                .filter((val) => val.editorial_catagory_name === "shipping")
                .map((val) => {
                  return (
                    <div>
                      {val.editorial_id} | {val.editorial_header} |{" "}
                      {val.editorial_description}
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-white border-4 border-black mx-1 my-6 px-6 w-1/3 overflow-hidden xl:my-5 xl:px-5 xl:w-1/6">
            <h3 className="text-3xl underline pt-1">Billing/Invoice</h3>
            <br></br>
            <div>
              {data
                .filter((val) => val.editorial_catagory_name === "billing")
                .map((val) => {
                  return (
                    <div>
                      {val.editorial_id} | {val.editorial_header} |{" "}
                      {val.editorial_description}
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/Login"
            className="no-underline border-1 border-black bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
          >
            Click Here to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
