import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import foto1 from "../assets/Vector.png";
import Image from "next/image";
import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import {
  HiOutlineChartPie,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineQrcode,
} from "react-icons/hi";
import { useRouter } from "next/router";

function Sidebar() {
  const sidebar_toggle = {
    //device view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },

    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const isActive = "activeLink";
  const nonActive = "link";

  return (
    <div>
      <motion.div
        variants={sidebar_toggle}
        animate={isOpen ? "open" : "closed"}
        className="fixed bg-[#0A221C] text-gray-300 shadow-xl z-[999] w-[16rem]
         max-w-[16rem] h-screen overflow-hidden md:relative"
      >
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={
            isOpen ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: 50, rotate: 180 }
          }
          transition={{ duration: 0 }}
        >
          <HiOutlineArrowRight
            size={25}
            className="absolute w-fit h-fit z-50 right-2 top-3 cursor-pointer md:block hidden mx-2"
          />
        </motion.div>

        <div className="flex items-center gap-5 font-medium pt-20 mx-4">
          <Image src={foto1} alt="photo2" priority quality={70} height="30" />
          <span className="text-xl whitespace-pre font-bold text-[#4BF0A5]">
            Faysal
          </span>
        </div>

        {/* menus */}
        <div className="flex flex-col h-full pt-20">
          <ul
            className="whitespace-pre px-2.5 text-md py-5 flex flex-col gap-1 font-medium overflow-x-hidden
          "
          >
            <li>
              <Link
                href="/HomeScreen"
                className={pathname === "/HomeScreen" ? isActive : nonActive}
              >
                <MdHomeFilled size={20} className="min-w-max" />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/InsightScreen"
                className={pathname === "/InsightScreen" ? isActive : nonActive}
              >
                <HiOutlineChartPie size={20} className="min-w-max" />
                Insight
              </Link>
            </li>

            <li>
              <Link
                href=""
                className={pathname === "/notification" ? isActive : nonActive}
              >
                <HiOutlineBell size={20} className="min-w-max" />
                Notifications
              </Link>
            </li>

            <li>
              <Link
                href=""
                className={pathname === "/profile" ? isActive : nonActive}
              >
                <HiOutlineUser size={20} className="min-w-max" />
                Profile
              </Link>
            </li>

            <li>
              <Link
                href=""
                className={pathname === "/qrcode" ? isActive : nonActive}
              >
                <HiOutlineQrcode size={20} className="min-w-max" />
                QR Code
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
