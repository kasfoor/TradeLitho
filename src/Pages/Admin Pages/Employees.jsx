import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { FourColumnTable } from "../../Components/FourColumnTable";

export default function Employees(props) {
  const [memberList, setMemberList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getMembers").then(
      (response) => {
        setMemberList(response.data);
      }
    );
  }, []);
  const onSubmit = (data) => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    //console.log(confirmation);
    if (confirmation === true) {
      deleteUser(data);
    }
  };

  const deleteUser = (data) => {
    Axios.delete(process.env.REACT_APP_BACKEND_PATH + "/api/deleteEmployee", {
      data: data,
    })
      .then((response) => {
        alert(response.data.message);
        window.location.reload(false);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <AdminHeader
        name="Admin"
        PageName="Admin"
        PageLocation="Admin's Employee Page"
      ></AdminHeader>
      <br />
      <FourColumnTable
        class="text-center"
        wait={1000}
        data={memberList.map(Object.values)}
        firstColumnName="Login"
        secondColumnName="First Name"
        thirdColumnName="Last Name"
        fourthColumnName="Level"
      ></FourColumnTable>
      <Link
        to="/Admin/New-Employee"
        className="bg-litho-blue hover:bg-litho-light-blue text-white text-center font-bold py-2 px-2 rounded flex justify-center"
        style={{ textDecoration: "none" }}
      >
        Add New User
      </Link>
      <br />
      <p className="ml-2">Type in the Login name to delete the user</p>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-2 space-y-4">
        {errors.delete && (
          <p className="text-red-600">*Login name is required</p>
        )}

        <input
          className="border rounded block"
          type="text"
          {...register("login_name", { required: true })}
        ></input>
        <button
          className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"
          type="submit"
        >
          Delete User
        </button>
      </form>
    </div>
  );
}
