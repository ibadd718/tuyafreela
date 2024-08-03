import { useState } from "react";
import Hero from "../assets/Hero-edited-min.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="relative">
      <div className="hidden md:block">
        <img src={Hero} className="opacity-75" alt="" />
      </div>
      <div className="max-w-xl mx-auto p-6 static md:absolute rounded-lg top-24 right-40 bg-white">
        <div className="py-20 px-8">
          <h2 className="text-3xl text-center text-gray-800 ">Login</h2>
          <p className="text-center mt-2">
            New user?{" "}
            <Link className="text-[#D6B8FF] underline" to={"/createAccount"}>
              Create a new account
            </Link>
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="my-6">
              <input
                type="email"
                id="email"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[340px] bg-[#ECECEC] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[340px] bg-[#ECECEC] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D6B8FF]"
                required
              />
              <p className="text-xs mt-1 text-[#717171]">
                Forgot password?{" "}
                <Link className="underline" to={"/forget"}>
                  Recover
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-[340px] bg-[#D6B8FF] text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
