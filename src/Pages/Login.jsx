import React, { useState, useContext } from "react";
import Image from "../Images/loginImage.png";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../Components/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  //Do post request with the sign in data to server -- verify if the user exist
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  // console.log(user);

  const onSubmit = (data) => {
    handleLogin(data);
    // console.log(data);
  };

  const handleLogin = async (data) => {
    let url = process.env.REACT_APP_BACKEND_PATH;

    await fetch(url + "/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "") {
          setUser(data.user);
          // console.log(data.user);
          if (data.user.comp_level_id === 20) {
            history.push("/Admin/Home");
          } else if (data.user.comp_level_id === 1) {
            history.push("/Pre-Press");
          } else if (data.user.comp_level_id === 2) {
            history.push("/Press/Press-240");
          } else if (data.user.comp_level_id === 3) {
            history.push("/Press/Press-528");
          } else if (data.user.comp_level_id === 4) {
            history.push("/Press/Press-540");
          } else if (data.user.comp_level_id === 5) {
            history.push("/Bindery");
          } else if (data.user.comp_level_id === 6) {
            history.push("/Shipping");
          } else if (data.user.comp_level_id === 7) {
            history.push("/Billing-and-Invoice");
          }
        } else {
          setError(data.message);
        }
        // console.log(data);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-10">
          <h2>Login</h2>
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              {...register("username", { required: true })}
              placeholder="Username"
            ></input>
            {errors.username && (
              <p className="text-red-600">*Username is required</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="***************"
            ></input>
            {errors.password && (
              <p className="text-red-600">*Password is required</p>
            )}

            <div className="flex justify-between">
              <Link
                to="/"
                className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"
                style={{ textDecoration: "none" }}
              >
                Go Back
              </Link>
              <button
                className="bg-litho-blue hover:bg-litho-light-blue text-white font-bold py-2 px-2 rounded"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="loginImage shadow-lg">
        <img
          src={Image}
          width="299"
          style={{ position: "relative" }}
          alt="login"
        />
      </div>
    </div>
  );
}

export default Login;
