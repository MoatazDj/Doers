import React, { useState } from "react";
import authSvg from "../assets/auth.jpg";
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
        console.log({ name, email, password1, password2 });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1,
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
          <div className="ml-12 flex flex-col items-center">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Workflow"
            />
            <br />
            <br />
            <br />
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              SignUp for some Dev
            </h1>
            <form
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" value="true" />
              <div className="mx-auto max-w-xs relative">
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
              </div>

              {/* <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div> */}

              {/* <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              >
                Register
              </button>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-gray-600 tracking-wide font-medium bg-white transorm translate-y-1/2">
                  Or sign in with email or social login
                </div>
                {/* <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button> */}
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="/"
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus focus:shadow-sm focus:shadow-outline mt-5"
                >
                  Sign In
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
      </div>
    </div>
  );
};

export default Register;
