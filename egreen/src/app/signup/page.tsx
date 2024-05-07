import Logo from "@/assets/Icons/Logo";
import LoginPicture from "../../assets/pictures/LoginPicture.jpg";
import Image from "next/image";
import Google from "../../assets/Icons/Google";
import Facebook from "@/assets/Icons/Facebook";
import Apple from "@/assets/Icons/Apple";

export default function SignUpPage() {
  return (
    <main className="bg-[#303125] h-screen grid grid-cols-2">
      <div className="p-10 col-span-1 flex flex-col items-center gap-16">
        <Logo />
        <span className="text-[#FFDBA0] font-Roger-main text-3xl">Sign Up</span>
        <span className="font-Manrope-extralight">Get started with foster</span>
        <div className="flex flex-col items-center gap-4">
          <input
            className="text-[#FFDBA0] border-2 border-[#FFDBA0] bg-transparent py-2 px-40 rounded-2xl  pl-2"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
          <input
            className="text-[#FFDBA0] border-2 border-[#FFDBA0] bg-transparent py-2 px-40 rounded-2xl pl-2"
            type="text"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="bg-[#FFDBA0] py-2 px-40 rounded-2xl text-black font-Manrope-semiBold">
            Sign Up
          </button>
          <hr className="h-[1px] bg-[#FFD186] w-full" />
          <div className="text-[#FFDBA0] flex flex-col gap-8">
            <button className="bg-transparent py-2 px-24 rounded-2xl border-[1px] border-[#FFDBA0] font-Manrope-semiBold flex gap-4">
              <Google />
              Sign Up with Google
            </button>
            <button className="bg-transparent py-2 px-24 rounded-2xl border-[1px] border-[#FFDBA0] font-Manrope-semiBold flex gap-4">
              <Facebook />
              Sign Up with Google
            </button>
            <button className="bg-transparent py-2 px-24 rounded-2xl border-[1px] border-[#FFDBA0] font-Manrope-semiBold flex gap-4">
              <Apple />
              Sign Up with Google
            </button>
          </div>
          <p className="text-[#FFDBA0] flex gap-2">
          <span>Already have an account?</span>
          <span className=" underline cursor-pointer">Login</span>
          </p>
        </div>
      </div>
      <div className="">
        <Image
          className="h-screen object-cover"
          src={LoginPicture}
          alt={`${LoginPicture} name`}
        />
      </div>
    </main>
  );
}
