import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialAtCircular } from "react-icons/ti";



const Socials = () => {
  const [showIcons, setShowIcons] = useState("hidden");

  return (
    <>
      <div className=" socials fixed right-[3%]  top-[30%]  space-y-5 ">
        <div
          className={`${showIcons}  anima  flex flex-col space-y-5 icons `}>
          <Link href="https//:github.com/Debbie-alt">
            <Image src="/linkedin1.png" width={35} height={20} role="button" />
          </Link>
          <Link href=" mailto:funmmy565@gmail.com">
            <Image src="/gmailorig.png" width={35} height={20} role="button" />
          </Link>
          <Link href="https//:twitter.com/Funmi565">
            <Image src="/x.png" width={35} height={20} role="button" />
          </Link>
          <Link href="https//:github.com/Debbie-alt">
            <Image src="/purplegit.png" width={30} height={20} role="button" />
          </Link>

          {/* <Image src="/linkedin1.png" width={40} height={20} role="button" /> */}
        </div>

        <button
          className="  fixed top-[72%] right-[5%] p-2 rounded-full bg-pink-900"
          onClick={() => {
            showIcons == "hidden"
              ? setShowIcons("flex")
              : setShowIcons("hidden");
          }}
        >
         <TiSocialAtCircular className="text-2xl"/>

        </button>
      </div>
    </>
  );
};

export default Socials;
