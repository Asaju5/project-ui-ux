import ConfirmPin from "@/components/modals/ConfirmPin";
import SetPinSuccess from "@/components/modals/SetPinSuccess";
import TransactionPin from "@/components/modals/TransactionPin";
import React, { useState } from "react";

function Modals() {
  const [showSetPin, setShowSetPinModal] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center space-y-5 pt-10">
      <div>
        <button
          onClick={() => setShowSetPinModal(true)}
          className="px-8 py-2 rounded-md bg-red-300"
        >
          Set Transaction Pin
        </button>
        <TransactionPin
          isSetPin={showSetPin}
          onClose={() => setShowSetPinModal(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowConfirmPin(true)}
          className="px-8 py-2 rounded-md bg-yellow-300"
        >
          Confirm Transaction Pin
        </button>
        <ConfirmPin
          isConfirmPin={showConfirmPin}
          onClose={() => setShowConfirmPin(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowSuccess(true)}
          className="px-8 py-2 rounded-md bg-yellow-300"
        >
          Pin Set Success
        </button>
        <SetPinSuccess
          isSuccessful={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      </div>
    </div>
  );
}

export default Modals;
