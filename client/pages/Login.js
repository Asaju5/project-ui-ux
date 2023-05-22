import { useState, useContext } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import axios from "axios";
import LoginMobile from "@/components/LoginMobile";
import { useRouter } from "next/router";
import { Context } from "@/context";
import { AiOutlineLoading } from "react-icons/ai";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  const { state, dispatch } = useContext(Context);
  console.log("state", state);

  const Validate = () => {
    let err = {};
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!password) {
      err.password = "Password required";
    }
    if (!email || !email_pattern.test(email)) {
      err.email = "Please enter a valid email";
    }

    setFormError({ ...err });
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = Validate();
    console.log(isValid);
    if (isValid) {
      try {
        setLoading(true);
        const { data } = await axios.post("http://localhost:4000/api/login", {
          email,
          password,
        });
        setLoading(false);
        navigate.push("/HomeScreen");
        dispatch({
          type: "LOGIN",
          payload: data,
        });
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.log(error);
        // Handle the error response
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className="bg-[#0A221C] rounded-lg p-4 flex flex-col items-center justify-center w-full h-screen">
          <div className="flex flex-col text-center">
            <h4 className="text-xl font-semibold text-[#4BF0A5]">
              Welcome to back
            </h4>
            <p className="text-sm text-gray-200">Sign in to your account</p>
          </div>
          <form className="w-[300px] mt-16" onSubmit={handleSubmit}>
            <div className="mx-4 bg-[#113A2F] p-1 flex flex-col rounded-md mb-4">
              <p className="text-xs text-gray-400 ml-1">Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1 text-gray-200"
              />
              <span className="text-red-500 text-xs">{formError.email}</span>
            </div>
            <div className="mx-4 bg-[#113A2F] p-1 flex flex-col rounded-md relative">
              <p className="text-xs text-gray-400 ml-1">Password</p>
              <input
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1
             text-gray-200 placeholder:text-white items-center"
              />

              {visible ? (
                <BsEyeSlashFill
                  size={20}
                  className="absolute right-3 bottom-2 text-white"
                  onClick={() => setVisible(false)}
                />
              ) : (
                <IoEyeSharp
                  size={20}
                  className="absolute right-3 bottom-2 text-white"
                  onClick={() => setVisible(true)}
                />
              )}
              <span className="text-red-500 text-xs">{formError.password}</span>
            </div>
            <div className="mx-4 mt-5 flex items-center gap-2"></div>

            <div className="mx-4 mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="border border-[#4BF0A5] py-2 rounded-lg w-full text-[#4BF0A5]"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <AiOutlineLoading className="animate-spin" />
                  </div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <LoginMobile />
      </div>
    </div>
  );
}

export default Login;
