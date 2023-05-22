import axios from "axios";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { useRouter } from "next/router";

function OnboardMobile() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
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
    <div className="p-8 mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-gray-200 gap-10">
            <MdKeyboardArrowLeft size={30} />
            <h4 className="text-md text-gray-300 font-semibold">
              Create an Account
            </h4>
            <div />
          </div>
          <div className="bg-[#0A221C] mx-4 mt-16 p-4 rounded-lg pb-10">
            <div className="flex flex-col text-center">
              <h4 className="text-lg font-semibold text-[#4BF0A5]">
                Welcome to Faysal
              </h4>
              <p className="text-[10px] text-gray-200">
                Complete your dign up to get started
              </p>
            </div>
            <div className="mx-4 mt-10 flex flex-col">
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="bg-[#113A2F] flex flex-col px-4 py-1 rounded-lg">
                  <p className="text-gray-200 text-sm">Name</p>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="p-0 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] mx-1 text-gray-200"
                  />
                  <span className="text-red-500 text-xs">
                    {formError.fullname}
                  </span>
                </div>
              </div>
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

              <div className="flex justify-center text-xs text-gray-200 gap-2">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  className="w-4 h-4 border text-green-950 border-white rounded focus:ring-0 focus:ring-green-900
                "
                />
                <div>
                  <p>By signing up, you Agree to the </p>
                  <p>Terms of Service and Privacy Policy</p>
                </div>
              </div>
              <div className="flex justify-center text-xs text-gray-200 gap-2">
                {formError.terms && (
                  <span className="text-red-500 text-xs mx-4">
                    {formError.terms}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-xs text-gray-200 mt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-[#0A221C] rounded-lg flex items-center gap-2"
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <>
                  Create Account
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
              Existing User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OnboardMobile;
