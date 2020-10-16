import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { authenthicate, isAuth } from "../helpers/auth";
import { axios } from "axios";
import { Redirect } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password1,
          })
          .then((res) => {
            setFormData({
              ...fromData,
              name: "",
              email: "",
              password1: "",
              password2: "",
            });
            toast.success(res.data.message);
          })
          .catch((err) => {
            toast.error(err.response.data.error);
          });
      } else {
        toast.error("Passwords dosen't match");
      }
    } else {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Redirect to="/" /> : null}
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <h1 className="text-2xl xl:text 3-xl font-extrabold">
            Sign up for some TO-DOS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;