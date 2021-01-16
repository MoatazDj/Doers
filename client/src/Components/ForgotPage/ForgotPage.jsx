import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../RegisterPage/node_modules/react-toastify/dist/ReactToastify.css";
import authSvg from "../assets/auth.jpg";
import { isAuth } from "../helpers/auth";

const Forgot = () => {
  const [fromData, setFormData] = useState({
    email: "",
  });
  const { email } = fromData;

  const handleChange = (text) => (e) => {
    setFormData({ ...fromData, [text]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/password/forgot`,
          {
            email,
          }
        );
        setFormData({
          ...fromData,
          email: "",
        });
        console.log(res);
        toast.success(`Please check your email! ${res.data.message}`);
      } catch (err) {
        console.log("esta la fiesta =>>>>>>>>>>>>>>>>", err);
        toast.error(err.response.data.error);
      }
    }
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
              Forgot password
            </h1>
            <form
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto max-w-xs relative">
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
              </div>

              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              >
                <i className="fas fa-sign-in-alt w-6 ml-2" />
                <span className="mt-3">Submit</span>
              </button>
            </form>
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

export default Forgot;
