import { Context } from "@/context";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function LoginMobile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="p-8 mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-gray-200 gap-10">
            <MdKeyboardArrowLeft size={30} />
            <h4 className="text-md text-gray-300 font-semibold">Sign in</h4>
            <div />
          </div>
          <div className="bg-[#0A221C] mx-4 mt-16 p-4 rounded-lg pb-10">
            <div className="flex flex-col text-center">
              <h4 className="text-lg font-semibold text-[#4BF0A5]">
                Welcome back
              </h4>
              <p className="text-[10px] text-gray-200">Login to your account</p>
            </div>
            <div className="mx-4 mt-10 flex flex-col">
              <div className="flex flex-col justify-center items-center mb-4"></div>
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="bg-[#113A2F] flex flex-col px-4 py-1 rounded-lg">
                  <p className="text-gray-200 text-sm">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1 text-gray-200"
                  />
                  <span className="text-red-500 text-xs">
                    {formError.email}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="bg-[#113A2F] flex flex-col px-4 py-1 rounded-lg">
                  <p className="text-gray-200 text-sm">Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1 text-gray-200"
                  />
                  <span className="text-red-500 text-xs">
                    {formError.password}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-xs text-gray-200 mt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-[#0A221C] rounded-lg flex items-center gap-2"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <AiOutlineLoading className="animate-spin" />
                </div>
              ) : (
                <>
                  {" "}
                  Sign In
                  <span className="p-0.5 bg-[#4BF0A5] rounded-full text-black">
                    <MdKeyboardArrowRight />
                  </span>
                </>
              )}
            </button>
          </div>

          <div className=" flex justify-center text-xs text-gray-200 mt-3">
            <button className="px-12 py-3 bg-[#0A221C] rounded-lg flex items-center gap-2">
              <span className="p-0.5 bg-[#4BF0A5] rounded-full text-black">
                <MdKeyboardArrowLeft />
              </span>
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginMobile;
