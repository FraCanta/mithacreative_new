import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "../../public/assets/logo.png";
import StepsContact from "../components/StepsContact/StepsContact";

export default async function IniziaProgetto() {
  return (
    <>
      <nav className="w-screen px-4 py-3 ">
        <div className="container flex items-center justify-between w-full mx-auto">
          <div className="hidden lg:block"></div>
          <Image src={Logo} alt="logo" className="w-[70px] " />
          <Link href="/">
            <Icon
              icon="tdesign:close"
              width="2rem"
              height="2rem"
              className="text-pink"
            />
          </Link>
        </div>
      </nav>

      <div className=" bg-pink/20 h-[0.04rem]"></div>
      <div className="flex flex-col items-center w-full h-screen py-10">
        <StepsContact />
      </div>
    </>
  );
}
