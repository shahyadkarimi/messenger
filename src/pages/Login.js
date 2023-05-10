import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="w-96 h-auto bg-gray-dark rounded-3xl flex items-center flex-col p-4">
      <h1 className="text-2xl font-semibold text-light">Messenger</h1>
      <span className="text-light mt-2 block">Login</span>
      <form
        onSubmit={submitHandler}
        className="w-full px-4 flex flex-col gap-6"
      >
        <input
          className="bg-gray-dark h-10 w-full text-light outline-none border-b-2 placeholder:text-light focus:border-b-[#6b8afd] focus:placeholder:text-[#6b8afd] placeholder:transition transition-all duration-200"
          placeholder="Email"
          type="email"
        />
        <input
          className="bg-gray-dark h-10 w-full text-light outline-none border-b-2 placeholder:text-light focus:border-b-[#6b8afd] focus:placeholder:text-[#6b8afd] placeholder:transition transition-all duration-200"
          placeholder="Password"
          type="password"
        />

        <button className="bg-[#6b8afd] text-[#fff] py-2 rounded-lg">
          Sign In
        </button>
      </form>
      {err && <span>Somthing Wrong !</span>}
      <p className="mt-6 text-light text-sm">
        You Don't have an account ?{" "}
        <Link to="/register" className="text-base text-[#6b8afd] ml-1">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
