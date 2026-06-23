import React, { useState, useContext } from "react";
import { HospitalContext } from "../Context/HospitalContext";

const Login = () => {

  const { Login } = useContext(HospitalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    Login(email, password);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form 
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>


        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>


      </form>

    </div>
  );
};

export default Login;