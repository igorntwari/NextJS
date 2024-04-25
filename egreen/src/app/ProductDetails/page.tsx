import React from "react";
import Image from "next/image";
import Maindetail from "../../assets/pictures/Maindetail.jpg";
import Smalldetail from "../../assets/pictures/Smalldetail.jpg";
import Smalldetail_2 from "../../assets/pictures/Smalldetail_2.jpg";
import Smalldetail_3 from "../../assets/pictures/Smalldetail_3.jpg";
import Star from "../../assets/Icons/Star";
import HalfStar from "../../assets/Icons/HalfStar";
import EmptyStar from "../../assets/Icons/EmptyStar";
import DropDown from "../../assets/Icons/DropDown";

function page() {
  return (
    <div className="bg-[#707356] flex gap-8 p-10">
      <div className="grid grid-cols-2 gap-4 w-1/2">
        <Image
          className="col-span-full object-contain rounded-[3.5rem]"
          src={Maindetail}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail_2}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail_2}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail_3}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail}
          alt="main image"
        />
        <Image
          className="col-span-1 object-contain rounded-[3.5rem]"
          src={Smalldetail_2}
          alt="main image"
        />
      </div>
      <div className="w-1/2">
        <p className="flex justify-center gap-6">
          <span>Shop All {">"} </span>
          <span>Category {">"}</span>
          <span>Product Name</span>
        </p>
        <p className="flex justify-between text-4xl py-8">
          <span className="font-Roger-main text-[#FFD186]">
            Scandinavian Chair
          </span>
          <span>$290</span>
        </p>
        <p className="flex gap-4">
          <span className="flex items-center">
            <Star />
            <Star />
            <Star />
            <HalfStar />
            <EmptyStar />
          </span>
          <span>
            {" "}
            {"("}
            3.5 stars
            {")"}
          </span>
          <span>10 Reviews</span>
        </p>
        <p className="py-8">Discover the amazing features of our product.</p>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-4">
            <div className="w-1/2">
              <span>Variant</span>
              <p className="text-[#FFD186] border-[1px] border-[#FFD186] flex justify-between py-2 rounded-xl px-2">
                <span>Select</span>
                <DropDown className="fill-[#FFD186]" />
              </p>
            </div>
            <div className="w-1/2">
              <span>Variant</span>
              <p className="text-[#FFD186] border-[1px] border-[#FFD186] flex justify-between py-2 rounded-xl px-2">
                <span>Select</span>
                <DropDown className="fill-[#FFD186]" />
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Variant</span>
            <div className="flex gap-4">
              <button className="bg-[#FFDBA0]  py-2 px-12 rounded-2xl text-black font-Manrope-semiBold">
                Option One
              </button>
              <button className="bg-transparent] border-[2px] border-[#FFDBA0] py-2 px-12 rounded-2xl text-white font-Manrope-semiBold">
                Option TWo
              </button>
              <button className="bg-transparent] border-[2px] border-[#FFDBA0] py-2 px-12 rounded-2xl text-white font-Manrope-semiBold">
                Option Three
              </button>
            </div>
            <div className="flex flex-col gap-4 items-start py-4">
              <p>Quantity</p>
              <button className="border-[2px] border-[#FFDBA0]  px-6 py-3 rounded-2xl">
                1
              </button>
            </div>
            <div className="flex flex-col gap-4 justify-center text-white ">
              <button className="bg-[#FFDBA0]  py-2 px-20 rounded-2xl font-Manrope-semiBold">
                Option One
              </button>
              <button className="bg-transparent border-[2px] border-[#FFDBA0] py-2 px-20 rounded-2xl font-Manrope-semiBold">
                Option One
              </button>
              <p className="text-center">Free Sheeping over $50</p>
            </div>
            <div>
              <p className="flex justify-between">
                <span>Details</span>
                <DropDown />
              </p>
              <Image
                className="col-span-full object-contain rounded-[3.5rem]"
                src={Maindetail}
                alt="main image"
              />
              <p className="py-4">Learn more about the product specifications and features.</p>
              <hr className="h-[0.5px] bg-white "/>
              <div className="flex flex-col gap-2 py-4">
                <p className="flex justify-between">
                  <span>Shiping</span>
                  <DropDown />
                </p>
                <p>Find out about our shipping options and delivery times.</p>
              </div>
              <hr className="h-[0.5px] bg-white "/>
              <div className="flex flex-col gap-2 py-4">
                <p className="flex justify-between">
                  <span>Returns</span>
                  <DropDown />
                </p>
                <p>Learn about our hassle-free return policy and process..</p>
              </div>
              <hr className="h-[0.5px] bg-white "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
