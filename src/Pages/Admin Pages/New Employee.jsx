import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Axios from "axios";

function NewEmp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    let confirmation = window.confirm(
      "Are you sure you want to add this user?"
    );
    //console.log(confirmation);
    if (confirmation === true) {
      submitNewEmp(data);
    }
  };

  const submitNewEmp = (newEmp) => {
    console.log(newEmp);
    Axios.post(process.env.REACT_APP_BACKEND_PATH + "/Admin/newMember", {
      comp_level_id: newEmp.level,
      comp_members_login: newEmp.login,
      comp_members_password: newEmp.password,
      comp_members_first: newEmp.firstname,
      comp_members_last: newEmp.lastname,
      comp_members_address: newEmp.address,
      comp_members_city: newEmp.city,
      comp_members_state: newEmp.state,
      comp_members_zipcode: newEmp.zip,
      comp_members_phone1: newEmp.phone1,
      comp_members_phone2: newEmp.phone2,
      comp_members_extension: newEmp.workextension,
      comp_members_email: newEmp.email,
      comp_members_notes: newEmp.notes,
    })
      .then((response) => {
        console.log("Success");
        alert(response.data.message)
            window.location.reload(false);

      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(error.response.data.message);

        }
      });
  };
  return (
    <div>
      <h1 className="text-center mb-5">Creating New Employee</h1>
      <div className="flex justify-center space-x-40 h-screen ">
        <div className="text-left">
          <h4>Legend for Level</h4>
          <p>1 - Pre-Press</p>
          <p>2 - Press 240</p>
          <p>3 - Press 528</p>
          <p>4 - Press 540</p>
          <p>5 - Bindery</p>
          <p>6 - Shipping</p>
          <p>7 - Billing</p>
          <p>20 - Administration</p>
        </div>

        <form className="space-y-5">
          {errors.login && (
            <p className="text-red-600 text-right">*Login is required</p>
          )}
          <div className="flex justify-between">
            <label htmlFor="login">*Login</label>

            <input
              className="border rounded"
              type="text"
              {...register("login", { required: "true" })}
            ></input>
          </div>
          {errors.password && (
            <p className="text-red-600 text-right">*Password is required</p>
          )}
          <div className="flex justify-between">
            <label htmlFor="password">*Password</label>
            <input
              className="border rounded "
              type="password"
              {...register("password", { required: "true" })}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="level">*Level</label>
            <select
              className="border rounded "
              type="text"
              {...register("level", { required: "true" })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>20</option>
            </select>
            {errors.level && (
              <p className="text-red-600 text-right">*Level is required</p>
            )}
          </div>
          {errors.firstname && (
            <p className="text-red-600 text-right">*First Name is required</p>
          )}
          <div className="flex justify-between">
            <label htmlFor="firstname">*First Name</label>
            <input
              className="border rounded "
              type="text"
              {...register("firstname", { required: "true" })}
            ></input>
          </div>
          {errors.lastname && (
            <p className="text-red-600 text-right">*Last Name is required</p>
          )}
          <div className="flex justify-between">
            <label htmlFor="lastname">*Last Name</label>
            <input
              className="border rounded "
              type="text"
              {...register("lastname", { required: "true" })}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="address">Address</label>
            <input
              className="border rounded"
              type="text"
              {...register("address")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="city">City</label>
            <input
              className="border rounded"
              type="text"
              {...register("city")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="state">State</label>
            <input
              className="border rounded"
              type="number"
              {...register("state")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="zip">Zipcode</label>
            <input
              className="border rounded "
              type="text"
              {...register("zip")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="phone1">Phone 1</label>
            <input
              className="border rounded "
              type="text"
              {...register("phone1")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="phone2">Phone 2</label>
            <input
              className="border rounded "
              type="text"
              {...register("phone2")}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="workextension">Work Extension</label>
            <input
              className="border rounded ml-5"
              type="text"
              {...register("workExtension")}
            ></input>
          </div>
          {errors.email && (
            <p className="text-red-600 text-right">*Email is required</p>
          )}
          <div className="flex justify-between">
            <label htmlFor="email">*Email</label>
            <input
              className="border rounded "
              type="text"
              {...register("email", { required: "true" })}
            ></input>
          </div>
          <div className="flex justify-between">
            <label htmlFor="notes">Notes</label>
            <input
              className="border rounded ml-5"
              type="text"
              {...register("notes")}
            ></input>
          </div>

          <br />
          <div className="flex justify-between">
            <Link
              to="/Admin/Employees"
              className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"
              style={{ textDecoration: "none" }}
            >
              Cancel
            </Link>
            <button
              className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEmp;
