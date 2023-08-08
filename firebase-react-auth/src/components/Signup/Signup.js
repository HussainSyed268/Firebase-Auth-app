import React from "react";
// const Signup = () => {
//   return (
//     <div>
//       <h1>Signup</h1>
//     </div>
//   );
// };
// Create a signup page just like the login page i have created in the Login.js
// file. Use the same styling and everything.
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const { signup } = useAuth();
// const handleSubmit = (e) => {
//   e.preventDefault();
//   signup(email, password);
// };

const Signup = () => {
  return (
    <div className="flex h-full bg-gradient-to-bl from-[#048c98] to-[#3adb74] items-center justify-center">
      <div className="flex flex-col h-5/6 w-2/6 rounded-lg bg-white">
        <h1 className="text-4xl h-1/6 justify-end pt-24 font-normal text-[#048c98]">
          Signup
        </h1>
        <form className="flex h-5/6 flex-col items-center pt-20">
          <input
            className="w-4/6 h-20 mt-5 mb-5 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="text"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-4/6 h-20 mt-5 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" flex justify-start w-4/6 mt-2">
            <input type="checkbox" />
            <label className="ml-2 text-slate-500">Show Password</label>
          </div>
          <input
            className="w-4/6 h-20 mt-5 text-start pl-4 border-2 border-solid-black rounded-sm"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            className="w-1/6 h-14 mt-10 text-center rounded-md bg-[#1a907a] text-white"
            type="submit"
            // onClick={handleSubmit}
          >
            SIGN UP
          </button>
          <h1 className="mt-8">
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
