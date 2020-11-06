import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authSvg from "../assets/auth.jpg";
import { isAuth, authenthicate } from "../helpers/auth";
import jwt from "jsonwebtoken";

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    token: "",
    show: true,
  });
  useEffect(() => {
    const token = match.params.token;
    const name = jwt.decode(token);
    if (token) {
      setFormData({ ...formData, name, token });
    }
  }, []);
  const { name, token, show } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/activation`,
        {
          token,
        }
      );
      setFormData({
        ...formData,
        show: false,
      });
      toast.success(res.data.message);
    } catch (err) {
      console.log("esta    ", err);
      toast.error(err.response.data.error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Redirect to="/" /> : null}
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="ml-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              welcome {name.name}
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex-1 mt-8 text-indigo-500"
            >
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                Activate your account
              </button>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transorm translate-y-1/2">
                  Or sign Up again
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="/register"
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg 
                  py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus focus:shadow-sm focus:shadow-outline mt-5"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src={authSvg}></img>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Activate;
