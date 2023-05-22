import OnboardMobile from "@/components/OnboardMobile";
import { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";

function Onboard() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  const Validate = () => {
    let err = {};
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fullname) {
      err.fullname = "Name required";
    }

    if (!password) {
      err.password = "Password required";
    }
    if (!email || !email_pattern.test) {
      err.email = "Please enter a valid email";
    }
    if (!termsChecked) {
      err.terms = "Please agree to the Terms of Service";
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
        const { data } = await axios.post(
          "http://localhost:4000/api/register",
          {
            fullname,
            email,
            password,
          }
        );
        setLoading(false);
        navigate.push("/VerifyAccount");
        console.log(data); // Handle the response data as needed
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
              Welcome to Faysal
            </h4>
            <p className="text-sm text-gray-200">
              Complete your dign up to get started
            </p>
          </div>
          <form className="w-[300px] mt-16" onSubmit={handleSubmit}>
            <div className="mx-4 bg-[#113A2F] p-1 flex flex-col rounded-md mb-4">
              <p className="text-xs text-gray-400 ml-1">Name</p>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1 text-gray-200"
              />
              <span className="text-red-500 text-xs">{formError.fullname}</span>
            </div>

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
            <div className="mx-4 flex items-center gap-2">
              <div>
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  className="w-4 h-4 border text-green-950 border-white rounded focus:ring-0 focus:ring-green-900
                "
                />
              </div>
              <div className="text-xs mt-3">
                <p className="text-gray-300">
                  By signing up, you agree to the{" "}
                </p>
                <p className="text-[#4BF0A5]">
                  Terms of Serviceand Policy Policy
                </p>
              </div>
            </div>
            {formError.terms && (
              <span className="text-red-500 text-xs mx-4">
                {formError.terms}
              </span>
            )}
            <div className="mx-4 mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="border border-[#4BF0A5] py-1 rounded-lg w-full text-[#4BF0A5]"
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
        <OnboardMobile />
      </div>
    </div>
  );
}

export default Onboard;
