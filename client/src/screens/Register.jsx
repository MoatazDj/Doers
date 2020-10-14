import React, { useState } from "react";
import { authSvg } from "../assets/auth.svg";
import { ToastContainer, toast } from "react-toastify";
import { authenthicate, isAuth } from "../helpers/auth";
import { axios } from "axios";
import { Redirect } from "react-router-dom";
