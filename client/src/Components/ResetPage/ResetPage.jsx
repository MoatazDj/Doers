import React, { useEffect, useState } from "react";
import authSvg from "../assets/auth.jpg";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Reset = ({ match }) => {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
  });
  const { password1, password2, token } = formData;
  useEffect(() => {
    let token = match.params.token;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, []);
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password1 === password2 && password1 && password2) {
        const res = axios.put(
          `${process.env.REACT_APP_API_URL}/password/reset`,
          {
            newPassword: password1,
            resetPasswordLink: token,
          }
        );
        setFormData({ ...formData, password1: "", password2: "" });
        console.log(res.data);
        toast.success(res.data.message);
      } else {
        toast.error("Passwords don't match");
      }
    } catch (err) {
      console.log(err);
      toast.error(`Something is wrong, ${err.response.data.error}`);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <ToastContainer />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="ml-12 flex flex-col items-center">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
              alt="Workflow"
            />
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Reset Your Password, please
            </h1>
            <div className="w-full flex-1 mt-8 text-indigo-500">
              <form
                className="mx-auto max-w-xs relative"
                onSubmit={handleSubmit}
              >
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
                  className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src={authSvg}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
