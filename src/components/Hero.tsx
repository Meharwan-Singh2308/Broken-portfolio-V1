import React, { useEffect, useState } from "react";
import SparklesText from "./ui/sparkles-text";
import Marquee from "./ui/marquee";
import { Dock, DockIcon } from "./ui/dock";
import {
  RiDiscordFill,
  RiGithubFill,
  RiMailFill,
  RiTwitterFill,
} from "@remixicon/react";
import Link from "next/link";
import GradualSpacing from "./ui/gradual-spacing";
import { FadeText } from "./ui/fade-text";
import { WobbleCard } from "./ui/wobble-card";

const Hero = () => {
  const messages = [
    "Hello!",
    "Hi there!",
    "Hey!",
    "Namaste ! ",
    "Jay Jinendra ",
    "Bonjour!",
    "Sat Shri Akaal! ",
  ];


  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1e1a1a]  px-10 max-sm:px-0 ">
      <div className="upper md:text-4xl md:w-[90vw] flex itmes-center pt-4  justify-center">
        <div className="upper-mid ">
          <Marquee className="w-[70vw] overflow-hidden rounded-full border-[1px] border-gray-900 ">
            <div className="flex items-center justify-center gap-2">
              <span className="dot bg-green-500 w-3 h-3 blur-sm rounded-full inline-block"></span>

              <span>AVAILABLE FOR FREELANCE WORK</span>
            </div>
          </Marquee>
        </div>
      </div>

      <main className="w-screen flex px-2 gap-x-2 max-sm:items-center ml-0 max-sm:gap-0 max-sm:justify-center  overflow-hidden">

        <div className="left md:text-3xl max-sm:w-screen flex flex-col items-center overflow-hidden w-[50vw] ">
          <div className="backgroundElement absolute top-[20%] left-[-2%] animate-pulse rotate-45 flex gap-5">
            <div className="row md:w-10 md:h-64 w-5 h-32 border-[1.5px] border-gray-700 "></div>
            <div className="row md:w-10 md:h-64 w-5 h-32 border-[1.5px] border-gray-700 "></div>
            <div className="row md:w-10 md:h-64 w-5 h-32 border-[1.5px] border-gray-700 "></div>
          </div>

          <div className="paragraph max-sm:w-screen max-sm:items-center w-full h-[75vh] items-center flex  justify-center  flex-col text-center">
            <GradualSpacing
              className="text-xl lg:text-4xl tracking-tighter"
              text={`${message}, I'm`}
            ></GradualSpacing>  

            <div className="animatedDivByM lg:h-20 lg:w-fit text-center flex items-center justify-center lg:text-6xl text-3xl relative h-10 w-25 overflow-hidden  ">
              <SparklesText
              
                sparklesCount={5}
                className="animatedDivByMeText w-full lg:text-6xl text-3xl "
                text={"Meharwan Singh"}
              ></SparklesText>
            </div>

            <h1 className="text-xl lg:text-3xl flex items-center justify-center gap-3 text-center  ">
              <FadeText
                direction="down"
                className="inline"
                text="A "
              ></FadeText>{" "}
              <FadeText
                direction="down"
                className="inline font-semibold text-green-600"
                text="Full Stack"
              ></FadeText>{" "}
              <FadeText
                direction="down"
                className="inline font-bold text-red-400"
                text="Developer </>"
              ></FadeText>
            </h1>

            <Dock
              className="w-40 h-8 lg:w-auto lg:h-auto lg:mt-10 fadeAnimation mt-5 animate-marquee"
              distance={80}
              magnification={55}
            >
              <DockIcon className="bg-[#5865F2]">
                <Link
                  className="w-6 h-6"
                  href={"https://discordapp.com/users/1237395043669639233"}
                >
                  <RiDiscordFill></RiDiscordFill>
                </Link>
              </DockIcon>   

              <DockIcon className="bg-black">
                <Link href={"https://github.com/Meharwan-Singh2308"}>
                  <RiGithubFill></RiGithubFill>
                </Link>
              </DockIcon>

              <DockIcon className="overflow-hidden bg-white">
                <Link
                  className="flex items-center justify-center"
                  href={"mailto:meharwansinghji@gmail.com"}
                >
                  <img
                    className="scale-150"
                    src="https://as2.ftcdn.net/v2/jpg/03/87/35/13/1000_F_387351313_RLxiiB3856pV9T0PLKHeYXjQ1EYROlZf.jpg"
                    alt=""
                  />
                  <RiMailFill></RiMailFill>
                </Link>
              </DockIcon>

              <DockIcon className="bg-[#0A66C2]">
                <Link href={"https://x.com/MS_Developer23"}>
                  <RiTwitterFill></RiTwitterFill>
                </Link>
              </DockIcon>
            </Dock>
          </div>
        </div>

        <div className="right max-sm:w-0 relative w-[40vw] h-[80vh] flex items-center justify-center ">

        <div className="backgroundElement absolute top-[60%] left-[100%] animate-pulse rotate-[35deg] flex gap-5">
            <div className="row w-5 h-32 border-[1.5px] border-gray-700 "></div>
          </div>

          <div className="fadeAnimation max-sm:hidden rounded-lg overflow-hidden inter-var w-fit h-fit ">
            <div className="lg:w-96 md:h-auto  flex items-center justify-center overflow-hidden w-fit h-[70vh] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] sm:w-[15rem] rounded-xl p-6 border ">
              <div className="flex  text-xl font-thin text-center items-center justify-center w-full h-full object-fill object-center">
          
               <WobbleCard >
                {/* <div> */}
                <img className="object-cover w-full h-full" src="https://i.pinimg.com/564x/e7/bc/02/e7bc02962a706dbe2dda6234b4ee3fbf.jpg" alt="" />
                {/* </div */}
               </WobbleCard>

                <div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
};

export default Hero;
