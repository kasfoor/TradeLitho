import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import UserContext from "../Components/UserContext";

export function PressHeader(props) {
  const {user} = useContext(UserContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="bg-headerColor p-2 min-w-full">
      <div className="flex justify-end space-x-4">
        <h1 className="text-lg"> Time : {date.toLocaleTimeString()}</h1>
        <h1 className="text-lg"> Date : {date.toLocaleDateString()}</h1>
        <h1 className="text-lg"> {props.name}</h1>
      </div>
      <nav className="flex flex-wrap justify-between px-4">
        <div className="flex w-6/12 sm:w-4/12">
          <img
            src={Logo}
            alt="Logo"
            className="shadow rounded-full max-w-full align-middle border-none w-20 h-20"
          ></img>
          <div className="mt-2 ml-2">
            <h1 className="font-extrabold text-2xl"> {props.PageName}</h1>
            <h2 className="">Welcome to {props.PageLocation}</h2>
          </div>
        </div>
        {user.comp_level_id === 20 ? (
          <div className="flex items-end space-x-4 pt-4">
            <Link
              to="/Press/Press-240"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 240
            </Link>
            <Link
              to="/Press/Press-528"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 528
            </Link>
            <Link
              to="/Press/Press-540"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 540
            </Link>
            <Link
              to="/Admin/Home"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Switch Back to Admin
            </Link>
            <Link
              to="/Login"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs mr-4"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex items-end space-x-4 pt-4">
            <Link
              to="/Press/Press-240"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 240
            </Link>
            <Link
              to="/Press/Press-528"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 528
            </Link>
            <Link
              to="/Press/Press-540"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs"
            >
              Press 540
            </Link>
            <Link
              to="/Login"
              className="bg-headerButtonColor rounded-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-headerButtonColorShadow hover:border-blue-500 text-xs mr-4"
            >
              Logout
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default PressHeader;
