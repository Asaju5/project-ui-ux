import CreateAjoModal from "@/components/ajo/CreateAjoModal";
import JoinedSuccess from "@/components/ajo/JoinedSuccess";
import AirTimeTopup from "@/components/modals/AirTimeTopup";
import BuyData from "@/components/modals/BuyData";
import ConfirmPin from "@/components/modals/ConfirmPin";
import ConfirmTranfer from "@/components/modals/ConfirmTranfer";
import FundYourWallet from "@/components/modals/FundYourWallet";
import PurchasedAirtime from "@/components/modals/PurchasedAirtime";
import PurchasedData from "@/components/modals/PurchasedData";
import SetPinSuccess from "@/components/modals/SetPinSuccess";
import TransactionPin from "@/components/modals/TransactionPin";
import TransferSuccessful from "@/components/modals/TransferSuccessful";
import React, { useState } from "react";

function Modals() {
  const [showSetPin, setShowSetPinModal] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showconfirmTransfer, setShowConfirmTransfer] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showBuyData, setShowBuyData] = useState(false);
  const [showAirtime, setShowAirtime] = useState(false);
  const [showBoughtData, setShowBoughtData] = useState(false);
  const [showBoughtAirtime, setShowBoughtAirtime] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [showCreateAjo, setShowCreateAjo] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center space-y-2 pt-10">
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

      <div>
        <button
          onClick={() => setShowFundWallet(true)}
          className="px-8 py-2 rounded-md bg-[#e76f51]"
        >
          Fund Your Wallet
        </button>
        <FundYourWallet
          isFundWallet={showFundWallet}
          onClose={() => setShowFundWallet(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowConfirmTransfer(true)}
          className="px-8 py-2 rounded-md bg-[#63685d]"
        >
          Transfer Successful
        </button>
        <ConfirmTranfer
          isConfirmTransfer={showconfirmTransfer}
          onClose={() => setShowConfirmTransfer(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowTransfer(true)}
          className="px-8 py-2 rounded-md bg-[#229faf]"
        >
          Confirm Transfer
        </button>
        <TransferSuccessful
          isTransferSuccessful={showTransfer}
          onClose={() => setShowTransfer(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowAirtime(true)}
          className="px-8 py-2 rounded-md bg-[#229faf]"
        >
          Buy Data
        </button>
        <BuyData
          isBuyData={showAirtime}
          onClose={() => setShowAirtime(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowBuyData(true)}
          className="px-8 py-2 rounded-md bg-[#229faf]"
        >
          Buy Airtime
        </button>
        <AirTimeTopup
          isBuyAirtime={showBuyData}
          onClose={() => setShowBuyData(false)}
        />
      </div>
      <div>
        <button
          onClick={() => setShowBoughtData(true)}
          className="px-8 py-2 rounded-md bg-[#08383a]"
        >
          Data Purchased
        </button>
        <PurchasedData
          isDataPurchased={showBoughtData}
          onClose={() => setShowBoughtData(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowBoughtAirtime(true)}
          className="px-8 py-2 rounded-md bg-[#222e63]"
        >
          Airtime Purchased
        </button>
        <PurchasedAirtime
          isAirtimePurchased={showBoughtAirtime}
          onClose={() => setShowBoughtAirtime(false)}
        />
      </div>

      <div>
        <button
          onClick={() => setShowJoin(true)}
          className="px-8 py-2 rounded-md bg-[#9028e6]"
        >
          Join Ajo
        </button>
        <JoinedSuccess isJoin={showJoin} onClose={() => setShowJoin(false)} />
      </div>

      <div>
        <button
          onClick={() => setShowCreateAjo(true)}
          className="px-8 py-2 rounded-md bg-[#e62891]"
        >
          Ajo Created
        </button>
        <CreateAjoModal
          isCreateAjo={showCreateAjo}
          onClose={() => setShowCreateAjo(false)}
        />
      </div>
    </div>
  );
}

export default Modals;
