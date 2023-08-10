import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { username, email, password } = values;
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setErrorMessage("All fields are required");
    } else {
      setErrorMessage("");
      setSuccessMessage("");
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          setSuccessMessage("Account created successfully");
          const user = res.user;
          await updateProfile(user, {
            displayName: username,
          });
          console.log(user.displayName);
          await delay(1000);
          navigate("/");
        })
        .catch((error) => {
          setSubmitButtonDisabled(false);
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already in use");
          }
          if (error.code === "auth/invalid-email") {
            setErrorMessage("Invalid email");
          }
          if (error.code === "auth/weak-password") {
            setErrorMessage("Password should be at least 6 characters");
          }
        });
    }
  };
  return (
    <div className="flex h-full bg-gradient-to-bl from-[#30b5a0] to-[#8ddbad] items-center justify-center">
      <div className="shadow-lg flex flex-col h-5/6 w-2/6 rounded-lg bg-white">
        <h1 className="text-4xl h-1/6 justify-end pt-24 font-normal text-[#048c98]">
          Signup
        </h1>
        <form className="flex h-5/6 flex-col items-center pt-20">
          <input
            className="w-4/6 h-20 mt-5 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={handleChange("username")}
          />
          <input
            className="w-4/6 h-20 mt-10 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <input
            className="w-4/6 h-20 mt-10 text-start pl-4 border-2 border-solid-black rounded-sm"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <div className=" flex justify-start w-4/6 mt-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label
              className="ml-2 text-slate-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </label>
          </div>
          <h1 className="text-red-500 mt-2">{errorMessage}</h1>
          <h1 className="text-green-500 mt-2">{successMessage}</h1>
          <button
            className="w-1/6 h-14 mt-4 text-center rounded-md bg-[#1a7d7e] disabled:opacity-75 text-white"
            type="submit"
            onClick={handleSubmit}
            disabled={submitButtonDisabled}
          >
            SIGN UP
          </button>
          <h1 className="mt-6">
            Already have an account?{" "}
            <Link className="text-[#1a907a]" to="/login">
              Login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Signup;
