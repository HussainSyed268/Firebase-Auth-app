import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = values;
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("All fields are required");
    } else {
      setErrorMessage("");
      setSuccessMessage("");
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          setSuccessMessage("Logged in successfully");
          await delay(1000);
          navigate("/");
        })
        .catch((error) => {
          setSubmitButtonDisabled(false);
          if (error.code === "auth/user-not-found") {
            setErrorMessage("Incorrect Email or Password");
          }
          if (error.code === "auth/wrong-password") {
            setErrorMessage("Incorrect Email or Password");
          }
        });
    }
  };
  return (
    <div className="flex h-full bg-gradient-to-bl from-[#048c98] to-[#3adb74] items-center justify-center">
      <div className="shadow-lg flex flex-col h-5/6 w-2/6 rounded-lg bg-white">
        <h1 className="text-4xl h-1/6 justify-end pt-24 font-normal text-[#048c98]">
          Login
        </h1>
        <form className="flex h-5/6 flex-col items-center pt-20">
          <input
            className="w-4/6 h-20 mt-5 mb-8 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="text"
            placeholder="Email"
            onChange={handleChange("email")}
            value={values.email}
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
            className="w-1/6 h-14 mt-8 text-center rounded-md bg-[#1a907a] disabled:opacity-75 text-white"
            type="submit"
            onClick={handleSubmit}
            disabled={submitButtonDisabled}
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
