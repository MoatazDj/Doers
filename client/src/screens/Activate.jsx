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
      setFormData = { ...formData, name, token };
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
        ...fromData,
        show: false,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      {isAuth() ? <Redirect to="/" /> : null}
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="ml-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">
            welcome {name}
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
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Activate;
