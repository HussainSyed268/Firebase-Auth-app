import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex h-full bg-gradient-to-bl from-[#048c98] to-[#3adb74] items-center justify-center">
      <div className="flex flex-col h-5/6 w-2/6 rounded-lg bg-white">
        <h1 className="text-4xl h-1/6 justify-end pt-24 font-normal text-[#048c98]">
          Login
        </h1>
        <form className="flex h-5/6 flex-col items-center pt-20">
          <input
            className="w-4/6 h-20 mt-5 mb-8 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-4/6 h-20 mt-5 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="password"
            placeholder="Password"
          />
          <div className=" flex justify-start w-4/6 mt-2">
            <input type="checkbox" />
            <label className="ml-2 text-slate-500">Show Password</label>
          </div>
          <button
            className="w-1/6 h-14 mt-8 text-center rounded-md bg-[#1a907a] text-white"
            type="submit"
          >
            SIGN IN
          </button>
          <h1 className="mt-8">
            Forgot{" "}
            <Link className="text-[#1a907a]" to="/signup">
              Username / Password
            </Link>
          </h1>
          <h1 className="mt-2">
            Don,t have an account?{" "}
            <Link className="text-[#1a907a]" to="/signup">
              Signup
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};
export default Login;
