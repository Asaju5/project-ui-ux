import React, { useEffect, useRef, useState } from "react";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

function VerifyAccount() {
  const [otp, setOTP] = useState(" ");
  const [otpSent, setOtpSent] = useState(false);
  const [otpvalid, setOtpValid] = useState(false);
  const [result, setResult] = useState("");
  const AuthInputRef = useRef(AuthCodeRef);
  const [disabled, setDisabled] = useState(false);
  const navigate = useRouter();
  const handleOnChange = (res) => {
    setResult(res);
  };

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    return newOTP.toString();
  };

  const sendOtpEmail = () => {
    //configure email service
    const serviceID = "service_nt9umqy";
    const templateID = "template_4op9eue";
    const userID = "K2ruwEvcBGXEpZw3E";

    //email params
    const email = "admin@faysal.com";
    const emailParams = {
      user_email: email,
      otp_code: generateOTP(),
    };

    //send email from emailjs

    emailjs.send(serviceID, templateID, emailParams, userID).then(
      (res) => {
        console.log("otp sent", res.status, res.text);
      },
      (error) => {
        console.log("failed to send", error);
      }
    );
  };

  useEffect(() => {
    // sendOtpEmail();
  }, []);

  //validate generated otp
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === result) {
      setOtpValid(true);
      navigate.push("/WelcomePage");
    } else {
      setOtpValid(false);
      navigate.push("/VerifyAccount");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[90%] lg:w-[50%] h-[70%] md:h-[85%] bg-[#0A221C] lg:mt-16 rounded-lg">
          <div className="flex flex-col items-center pt-12">
            <div className="hidden lg:flex flex-col items-center">
              <h4 className="lg:text-3xl text-2xl font-bold text-[#4BF0A5] py-2">
                Verify your account
              </h4>
              <p className="text-center sm:text-xs w-[1/2] text-white mb-4">
                We've sent a verification code to olumideXZY@example.com
              </p>
            </div>
            <div className="lg:hidden flex flex-col items-center">
              <h4 className="text-2xl font-bold text-[#4BF0A5] ">
                We sent you a verification
              </h4>
              <h4 className="text-2xl font-bold text-[#4BF0A5]">
                code to your email
              </h4>
              <p className="text-center sm:text-xs w-[1/2] text-white mb-4">
                Enter the code sent to your email
              </p>
            </div>

            <form
              className="flex flex-col lg:pt-8 mt-16"
              onSubmit={handleSubmit}
            >
              <div className="space-y-6 flex flex-col items-center justify-center">
                <div className="otp-cont sm:pt-4 lg:pt-8">
                  <AuthCode
                    allowedCharacters="numeric"
                    ref={AuthInputRef}
                    onChange={handleOnChange}
                    containerClassName="container"
                    inputClassName="input"
                    disabled={disabled}
                    isPassword={false}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 rounded-lg shadow-md bg-[#4BF0A5] font-semibold"
                >
                  Continue
                </button>
              </div>

              <div className="text-sm mt-8 text-center font-medium text-white pb-6">
                Didn't receive any code?{" "}
                <span className="text-[#4BF0A5] cursor-pointer">
                  Resend Code
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
