import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div
        className={
          "min-h-screen w-full flex flex-col justify-center items-center"
        }
      >
        <div className="w-full flex xl:flex-row flex-col justify-center items-center">
          <img
            className={"w-52 animate-pulse"}
            src="/sibtorsh-logo.svg"
            alt=""
          />
          <span className={"font-bold text-xl xl:text-5xl text-brand-300"}>
            Welcome to Sibtorsh code challenge
          </span>
          <img
            className={"w-52 animate-pulse"}
            src="/sibtorsh-logo.svg"
            alt=""
          />
        </div>
        <Link to={"/auth/login"}>
          <Button text="Login To Your Account" />
        </Link>
      </div>
    </>
  );
}
