import Link from "next/link";
import logo from "../assets/Vector.png";
import { AiOutlineClose } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import {
  HiOutlineChartPie,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineQrcode,
} from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";
import avatar from "../assets/user.png";
import { useState } from "react";

function Headertwo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="absolute left-1 md:hidden">
        <div>
          <CgMenuLeft size={30} onClick={() => setOpen(!open)} />
        </div>
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
      <div className="pr-2">
        <Image
          src={avatar}
          alt="avatar"
          priority
          quality={70}
          className="lg:h-90 lg:w-90"
        />
      </div>
      <div className="mb-3 flex flex-col items-center">
        <h4 className="font-semibold text-lg md:text-xl lg:text-lg">
          Olumide Ajayi
        </h4>
        <p className="text-sm md:text-md text-gray-300">Faysalid Lumijay</p>
      </div>
    </>
  );
}

export default Headertwo;
