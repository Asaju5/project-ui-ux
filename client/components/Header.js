import Image from "next/image";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import {
  HiOutlineChartPie,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineQrcode,
} from "react-icons/hi";
import foto from "../assets/user.png";
import logo from "../assets/Vector.png";
import Link from "next/link";
import { UserAuth } from "../context";

function Header() {
  const [open, setOpen] = useState(false);
  const { user } = UserAuth();

  return (
    <div className="flex w-full">
      <div className="md:hidden flex items-center justify-between w-full px-4 mt-8">
        <div onClick={() => setOpen(!open)} className="text-white flex ml-4">
          <CgMenuLeft size={30} />
        </div>
        <div className="flex flex-col items-center mt-4">
          <h4 className="text-xs text-gray-300">Welcome back</h4>
          <h2 className="text-xl font-semibold text-gray-200">
            {user && user.email}
          </h2>
        </div>
        <div />

        {/* Mobile Menu */}
        {/* Overlay */}
        {open ? (
          <div className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            open
              ? "fixed top-0 left-0 w-[300px] max-w-[300px] h-screen bg-[#0A221C] z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] max-w-[300px] h-screen bg-[#0A221C] z-10 duration-500"
          }
        >
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-4 top-4 cursor-pointer px-3 py-1 rounded-md"
          >
            <AiOutlineClose size={25} className="text-gray-300" />
          </div>

          <div className="flex items-center gap-2 font-medium pt-24 mx-4 ml-12">
            <Image src={logo} alt="photo2" priority quality={70} height="30" />
            <span className="text-3xl font-bold text-[#4BF0A5]">Faysal</span>
          </div>

          <div className="flex flex-col h-full  ml-8">
            <ul
              onClick={() => setOpen(!open)}
              className=" text-gray-300 px-2.5 text-md py-5 flex flex-col gap-1 font-medium overflow-x-hidden
          "
            >
              <li>
                <Link href="/HomeScreen" className="link pb-5">
                  <MdHomeFilled size={30} className="min-w-max" />
                  Home
                </Link>
              </li>

              <li>
                <Link href="/InsightScreen" className="link pb-5">
                  <HiOutlineChartPie size={30} className="min-w-max" />
                  Insight
                </Link>
              </li>

              <li>
                <Link href="" className="link pb-5">
                  <HiOutlineBell size={30} className="min-w-max" />
                  Notifications
                </Link>
              </li>

              <li>
                <Link href="" className="link pb-5">
                  <HiOutlineUser size={30} className="min-w-max" />
                  Profile
                </Link>
              </li>

              <li>
                <Link href="" className="link pb-5">
                  <HiOutlineQrcode size={30} className="min-w-max" />
                  QR Code
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full items-center justify-between md:mx-12 lg:mx-8 pt-8">
        <div className="md:ml-24 lg:ml-0">
          <h4 className="text-lg text-gray-200 md:text-sm">
            Welcome to your Faysal
          </h4>
          <h2 className="text-2xl font-bold text-white">
            {user && user.email}
          </h2>
        </div>
        <div className="md:hidden  lg:flex  items-center gap-4">
          <Image src={foto} alt=".." priority quality={60} />
          <div>
            <h2 className="text-xl font-semibold text-gray-200">Full Name</h2>
            <p className="text-gray-400">
              FaysalId <span>userID</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
