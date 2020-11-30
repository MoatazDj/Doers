import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authSvg from "../assets/auth.jpg";
import { isAuth, authenthicate } from "../helpers/auth";
import { GoogleLogin } from "react-google-login";

const Login = ({ history }) => {
  const [fromData, setFormData] = useState({
    email: "",
    password1: "",
  });
  const { email, password1 } = fromData;

  const handleChange = (text) => (e) => {
    setFormData({ ...fromData, [text]: e.target.value });
  };
  const sendGoogleToken = (tokenId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
        idToken: tokenId,
      })
      .then((res) => {
        informParent(res);
      })
      .catch((err) => {
        toast.error("Google login error");
      });
  };
  const informParent = (response) => {
    authenthicate(response, () => {
      isAuth() && isAuth.role === "admin"
        ? history.push("/admin")
        : history.push("/private");
    });
  };
  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password1) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password: password1,
        });
        authenthicate(res, () => {
          setFormData({
            ...fromData,
            email: "",
            password1: "",
          });
        });
        isAuth() && isAuth().role === "admin"
          ? history.push("/admin")
          : history.push("/private");
        toast.success(`Hey ${res.data.user.name}, welcome back`);
      } catch (err) {
        toast.error(err.response.data.error);
      }
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
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

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                >
                  <i className="fas fa-sign-in-alt w-6 -ml-2" />
                  <span className="mt-3">Login</span>
                </button>
                <br />
                <a
                  href="/users/password/forgot"
                  className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0 mt-2"
                >
                  Forgot password?
                </a>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text text-gray-600 tracking-wide font-medium bg-white transorm translate-y-1/2">
                  Or sign Up as a new user
                </div>
              </div>
              <div className="flex flex-col items-center">
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="mt-3 w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                    >
                      Sign In with Google
                    </button>
                  )}
                ></GoogleLogin>
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
