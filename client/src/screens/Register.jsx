import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authSvg from "../assets/auth.jpg";
import { isAuth } from "../helpers/auth";

const Register = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { email, name, password1, password2 } = fromData;

  const handleChange = (text) => (e) => {
    setFormData({ ...fromData, [text]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/register`,
            {
              name,
              email,
              password: password1,
            }
          );
          setFormData({
            ...fromData,
            name: "",
            email: "",
            password1: "",
            password2: "",
          });
          toast.success(res.data.message);
        } catch (err) {
          toast.error(err.response.data.error);
        }
      } else toast.error("Passwords dosen't match");
    } else toast.error("Please fill all fields");
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Redirect to="/" /> : null}
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="ml-12 flex flex-col items-center">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
              alt="Workflow"
            />
            <br />
            <br />
            <br />
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              SignUp for some Dev
            </h1>
            <div
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" value="true" />
              <form className="mx-auto max-w-xs relative">
                <input
                  aria-label="Name"
                  name="name"
                  type="name"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  placeholder="Name"
                  onChange={handleChange("name")}
                  value={name}
                />
                <input
                  aria-label="Email address"
                  name="email"
                  type="email"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  placeholder="Email address"
                  onChange={handleChange("email")}
                  value={email}
                />
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  placeholder="Password"
                  onChange={handleChange("password1")}
                  value={password1}
                />
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  placeholder="Confirm password"
                  onChange={handleChange("password2")}
                  value={password2}
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                >
                  <i className="fas fa-sign-in-alt w-6 -ml-2" />
                  <span className="mt-3">Submit</span>
                </button>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transorm translate-y-1/2">
                    Or sign in with email or social login
                  </div>
                </div>
              </form>

              <div className="flex flex-col items-center">
                <a
                  href="/login"
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg 
                  py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus focus:shadow-sm focus:shadow-outline mt-5"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src={authSvg}></img>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
