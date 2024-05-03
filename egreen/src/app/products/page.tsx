import React from "react";
import Image from "next/image";
import product_1 from "../../assets/pictures/product_1.jpg";

function page() {
  return (
    <div className="bg-[#707356] gap-10 p-10">
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-[#FFD186] font-Roger-main text-6xl">
          Featured Products 
        </h1>
        <span className="flex justify-start w-1/2 ">
          Discover an extensive selection of top-notch products that are sure to
          meet your needs. From premium items to essential goods, our diverse
          inventory has something for everyone. Start exploring today!
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4 py-9">
        <div className="flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-12 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className=" flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className=" flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className=" flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className=" flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className=" flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <Image
          className="rounded-2xl object-contain"
          src={product_1} alt="product1" />
          <p className="flex justify-between py-4">
            <span>Luxury Sofa</span>
            <span>$499</span>
          </p>
          <span className="py-2">Blue</span>
          <button className="bg-[#FFDBA0] py-2 px-20 rounded-2xl text-black font-Manrope-semiBold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
