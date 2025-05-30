import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      navigate("/dashboard/users");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">ورود</h1>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          ورود
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
