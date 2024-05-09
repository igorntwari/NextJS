"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LandingPicture from "../assets/pictures/LandingPicture.jpg";
import Logo from "@/assets/Icons/Logo";
import DropDown from "@/assets/Icons/DropDown";
import Shoping from "@/assets/Icons/Shoping";
import SmallLandingPicture from "../assets/pictures/SmallLandingPicture.jpg";
import Navigate from "@/assets/Icons/Navigate";
import Search from "@/assets/Icons/Search";
import MenuDrop from "@/Modals/MenuPop";
export default function LandingPage() {
  const [where, setWhere] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [who, setWho] = useState("");

  const handleSearch = () => {
    console.log(
      `Where: ${where}, Check In: ${checkIn}, Check Out: ${checkOut}, Who: ${who}`
    );
    setWhere("");
    setCheckIn("");
    setCheckOut("");
    setWho("");
  };

  return (
    <div className="relative h-screen">
      <Image
        className="absolute object-cover w-full h-full"
        src={LandingPicture}
        alt="landing page"
      />

      <div className="relative flex justify-between gap-4 items-center p-6">
        <span>
          <Logo />
        </span>

        <div className="font-Manrope-Regular items-center flex gap-6 cursor-pointer">
          <span>Rentals</span>
          <span>Buy</span>
          <span>Sell</span>
          <p className="flex items-center">
            <MenuDrop />
            <DropDown />
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <Shoping />
          <Link href="/products">
            <button className="bg-[#FFDBA0] py-2 px-4 rounded-3xl font-Manrope-semiBold text-black">
              Find a house
            </button>
          </Link>
        </div>
      </div>

      <div className="px-40 py-16 flex justify-between">
        <div className="relative flex flex-col gap-10 items-start">
          <p className="flex flex-col font-Roger-main text-7xl gap-8">
            <span>Find Your</span>
            <span>Dream Home</span>
          </p>
          <p className="font-Manrope-Regular">
            Come and explore the wide range of houses we have available for{" "}
            <br /> both rent and sale, and allow us to help you discover the
            perfect <br /> place for you to call home sweet home.
          </p>
          <Link href="/products">
            <button className="bg-[#FFDBA0] py-2 px-4 rounded-3xl font-Manrope-semiBold text-black">
              Find a house
            </button>
          </Link>
        </div>
        <div className="relative backdrop-brightness-200 backdrop-contrast-75 backdrop-blur-3xl flex flex-col gap-4 px-4 rounded-xl">
          <Image
            className="object-center rounded-2xl"
            src={SmallLandingPicture}
            alt="Small Landing Page"
          />
          <p className="flex flex-col gap-2 font-Manrope-Regular">
            <span>1801 (From 1801 To 1899 Odd) FOREST CITY RD,</span>
            <span>FOREST CITY TWP, ME</span>
          </p>
          <p className="flex justify-between font-Manrope-Regular">
            <span>Today, 5 hours ago</span>
            <Navigate />
          </p>
        </div>
      </div>
      <div className="relative px-40 py-7">
        <div
          className="backdrop-brightness-200 backdrop-contrast-75 backdrop-blur-3xl flex items-center justify-between gap-10 p-4 rounded-lg
        "
        >
          <p className="flex flex-col gap-2">
            <span>Where</span>
            <input
              className="bg-transparent w-32"
              type="text"
              placeholder="Search destinations"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
            />
          </p>

          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>Check In</span>
            <input
              className="bg-transparent w-32"
              type="text"
              placeholder="Add Dates"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>check out</span>
            <input
              className="bg-transparent w-32"
              type="text"
              placeholder="Add Dates"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>Who</span>
            <input
              className="bg-transparent w-32"
              type="text"
              placeholder="Add Guests"
              value={who}
              onChange={(e) => setWho(e.target.value)}
            />
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p
            className="flex flex-col gap-2 items-center bg-[#FFDBA0] py-4 px-6 rounded-lg"
            onClick={handleSearch}
          >
            <Search />
            <span className="text-black font-Manrope-bold">Search</span>
          </p>
        </div>
      </div>
    </div>
  );
}
