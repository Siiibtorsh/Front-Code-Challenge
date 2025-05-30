import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("لطفا نام کاربری و رمز عبور را وارد کنید");
      return;
    }
    if (username === "admin" && password === "admin") {
      navigate("/dashboard/users");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    // container
    <div className="h-screen w-full flex flex-col items-center justify-start gap-5 bg-gray-100 py-10">
      {/* sibtorsh logo */}
      <img className="w-40 h-40" src="/sibtorsh-logo.svg" alt="سیب ترش" />
      {/* login form */}
      <form
        onSubmit={login}
        className="bg-white p-6 rounded-xl shadow-md w-80 space-y-5"
      >
        {/* login form title */}
        <h1 className="text-2xl font-bold text-center my-3">ورود</h1>
        {/* username input */}
        <input
          type="text"
          className="w-full p-2 border-2 rounded-md focus:border-green-500 outline-none"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 border-2 rounded-md focus:border-green-500 outline-none"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-all duration-150"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
