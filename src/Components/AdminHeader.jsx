import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import "../index.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
export function AdminHeader(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="bg-headerColor p-2 min-w-full">
      <div className="flex justify-end space-x-4 px-2">
        <h1 className="text-lg"> Time : {date.toLocaleTimeString()}</h1>
        <h1 className="text-lg"> Date : {date.toLocaleDateString()}</h1>
        <h1 className="text-lg"> Admin</h1>
      </div>

      <nav className="flex flex-wrap justify-between px-4">
        <div className="flex w-6/12 sm:w-4/12">
          <img
            src={Logo}
            alt="Logo"
            className="shadow rounded-full max-w-full align-middle border-none w-20 h-20"
          ></img>
          <div className="mt-2 ml-4">
            <h1 className="font-extrabold text-2xl"> Admin</h1>
            <h2 className="truncate">Welcome to {props.PageLocation}</h2>
          </div>
        </div>

        <div className="flex items-end space-x-4 pt-4 md:static">
          <Link to="/Admin/Home" className="link_btn">
            Home
          </Link>
          <Link to="/Admin/Employees" className="link_btn">
            Employees
          </Link>
          <Link to="/Admin/Create-a-Quote" className="link_btn">
            Create a Quote
          </Link>
          <Link to="/Admin/Order" className="link_btn">
            Order
          </Link>
          {/* <Link to="/Admin/Order-Status" className="link_btn">
            Order Status
          </Link> */}
          <Link to="/Admin/Order-History" className="link_btn">
            Order History
          </Link>
          <Link to="/Admin/Quote-History" className="link_btn">
            Quote History
          </Link>
          <Link to="/Admin/Clients" className="link_btn">
            Clients
          </Link>

          <DropdownButton
            variant="secondary"
            id="dropdown-basic"
            title="Go To..."
            drop="down"
            style={{ height: "100%" }}
          >
            <Dropdown.Item>
              <Link
                to="/Pre-Press"
                className="no-underline text-gray-800"
              >
                Pre-Press
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/Press/Press-240"
                className="no-underline text-gray-800"
              >
                Press 240
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/Press/Press-528"
                className="no-underline text-gray-800"
              >
                Press 528
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link
                to="/Press/Press-540"
                className="no-underline text-gray-800"
              >
                Press 540
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Bindery" className="no-underline text-gray-800">
                Bindery
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Shipping" className="no-underline text-gray-800">
                Shipping
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/Billing-and-Invoice"
                className="no-underline text-gray-800"
              >
                Billing and Inovice
              </Link>
            </Dropdown.Item>
          </DropdownButton>
          <Link to="/Login" className="link_btn">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;
