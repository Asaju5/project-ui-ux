import React, { useRef, useState } from "react";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";
import { TbShieldLock } from "react-icons/tb";

function ConfirmTranfer({ isConfirmTransfer, onClose }) {
  if (!isConfirmTransfer) return null;

  const [otp, setOTP] = useState(" ");
  const [otpSent, setOtpSent] = useState(false);
  const [otpvalid, setOtpValid] = useState(false);
  const [result, setResult] = useState("");
  const AuthInputRef = useRef(AuthCodeRef);
  const [disabled, setDisabled] = useState(false);
  const handleOnChange = (res) => {
    setResult(res);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="w-[600px] bg-[#0A221C] flex flex-col mx-4 rounded-lg py-2">
        <button
          onClick={() => onClose()}
          className="text-gray-300 text-xl place-self-end mr-4 cursor-pointer"
        >
          X
        </button>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#113A2F] p-2 text-[#4BF0A5] rounded-md">
            <TbShieldLock size={30} />
          </div>
          <div className="flex flex-col py-4 items-center">
            <h4 className="text-2xl text-gray-200 font-semibold mb-4">
              Confirm Transfer
            </h4>
            <p className="text-gray-400 tracking-wider flex flex-col items-center">
              You are about to send #400,000 <span>to SHALOM JACOBS</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 md:mt-0 pb-4">
          <div className="otp-cont sm:pt-4 lg:pt-12">
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
        </div>
        <div className="flex items-center justify-center pt-4 pb-16">
          <button
            className="flex items-center justify-center py-2.5 w-full mx-8 md:mx-20
       bg-[#4BF0A5] gap-2 text-black font-semibold rounded-lg "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTranfer;
