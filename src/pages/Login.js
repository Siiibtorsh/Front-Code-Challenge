import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Login() {
  const navigate = useNavigate(0);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: false,
    password: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  // it's useful for forms with multiple inputs
  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.password || !formData.username) {
      setErrorMessage((prev) => {
        return {
          username: !formData.username,
          password: !formData.password,
        };
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard/users");
    }, 1000);
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className=" w-full max-w-[450px] flex items-center  relative">
        <img
          src="/sibtorsh-logo.svg"
          alt="logo"
          className="w-40 inline-block ml-5"
        />
        <img
          src="/arrow.png"
          className="w-24 -hue-rotate-90 rotate-[120deg] absolute left-[122px] top-5 "
          alt=""
        />
        <span className="text-brand-300 absolute left-52 top-5 text-md md:text-xl">
          {" "}
          Welcome to Sibtorsh
        </span>
      </div>
      <div className="shadow-md w-full max-w-[450px] p-7">
        <h2 className="text-xl md:text-2xl mb-5 text-center text-brand-300">
          Please Enter Your Credentials
        </h2>
        <form
          action=""
          className="flex flex-col gap-6 just"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
              className="w-full border p-3 rounded-md"
              onChange={handleChangeInput}
            />
            {errorMessage.username && (
              <p className="text-red-600 ml-2 mt-2">username is required</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full border p-3 rounded-md"
              onChange={handleChangeInput}
            />
            {errorMessage.password && (
              <p className="text-red-600 ml-2 mt-2">password is required</p>
            )}
          </div>

          <Button
            text={isLoading ? <Spinner /> : "Login"}
            disabled={isLoading}
          />
        </form>
      </div>
    </section>
  );
}
