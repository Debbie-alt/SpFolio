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
          className={`${showIcons}    flex flex-col space-y-5 icons `}>
          <a href="https://github.com/Debbie-alt">
            <Image src="/linkedin1.png" width={35} height={20} role="button" alt="linkedin icon" />
          </a>
          <a href=" mailto:funmmy565@gmail.com">
            <Image src="/gmailorig.png" width={35} height={20} role="button" alt="gmail-icon" />
          </a>
          <a href="https://twitter.com/Funmi565">
            <Image src="/x.png" width={35} height={20} role="button" alt="twitter icon" />
          </a>
          <a href="https://github.com/Debbie-alt">
            <Image src="/purplegit.png" width={30} height={20} role="button" alt="git icon" />
          </a>

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
