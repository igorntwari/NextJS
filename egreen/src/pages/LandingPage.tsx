import Image from "next/image";
import LandingPicture from "../assets/pictures/LandingPicture.jpg";
import Logo from "@/assets/Icons/Logo";
import DropDown from "@/assets/Icons/DropDown";
import Shoping from "@/assets/Icons/Shoping";
import SmallLandingPicture from "../assets/pictures/SmallLandingPicture.jpg";
import Navigate from "@/assets/Icons/Navigate";
import Search from "@/assets/Icons/Search";
export default function LandingPage() {
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

        <div className="font-Manrope-Regular flex gap-6">
          <span>Rentals</span>
          <span>Buy</span>
          <span>Sell</span>
          <p className="flex items-center">
            <span>More</span>
            <DropDown />
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <Shoping />
          <button className="bg-[#FFDBA0] py-2 px-4 rounded-3xl font-Manrope-semiBold text-black">
            Find a house
          </button>
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
          <button className="bg-[#FFDBA0] py-2 px-4 rounded-3xl font-Manrope-semiBold text-black">
            Find a house
          </button>
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
      <div className="relative px-60 py-7">
        <div
          className="backdrop-brightness-200 backdrop-contrast-75 backdrop-blur-3xl flex items-center justify-between gap-10 p-4 rounded-lg
        "
        >
          <p className="flex flex-col gap-2">
            <span>Where</span>
            <span>Search destinations</span>
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>check in</span>
            <span>add dates</span>
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>check out</span>
            <span>Add dates</span>
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2">
            <span>Who</span>
            <span>add guest</span>
          </p>
          <div className="w-[2px] bg-white h-16"></div>
          <p className="flex flex-col gap-2 bg-[#FFDBA0] py-4 px-6 rounded-lg">
            <Search />
            <span>Search</span>
          </p>
        </div>
      </div>
    </div>
  );
}
