import bukhor from "../assets/Machine.3d5f7cf7280ea0ef524e.png";
import smoke from "../assets/Smoke.7c3ff80d303113864f33.png";
import bluestar from "../assets/shine01.7705d396efb447290480.png";
import kite from "../assets/download.png";
import blueline from "../assets/w3.3998d9b1f65f76d42c6c (1).png";
import { useParallax } from "react-scroll-parallax";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; // <-- import GSAP
import AudioPlayer from "./AudioPlayer";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
export const EidId = ({audioSrc}) => {
  const [ref, inView] = useInView(); 
  const {t} = useTranslation()
  gsap.registerPlugin(useGSAP);

  const bluestarImg = useParallax({
    translateY: ["10px", "-10px"],
    rotate: ["-30deg", "-30deg"],
  });
  const bukhorImg = useParallax({
    translateY: ["30px", "-140px"],
  });
  const somkeImg = useParallax({
    translateY: ["100px", "-130px"],
    translateX: ["-48%", "-48%"],
  });
  const kiteImg = useParallax({
    translateY: ["30%", "-30%"],
  });
  const blueLineImg = useParallax({
    translateY: ["0", "-50%"],
    translateX: ["-30%", "0%"],
  });
  useGSAP(
    () => {
      gsap.fromTo(
        ".bluestar",
        { scale: 1 },
        { scale: 1.3, duration: 1.5, repeat: -1, yoyo: true }
      );
    },
    { scope: bluestarImg.ref }
  );

  useGSAP(
    () => {
      kiteImg.current = gsap
        .timeline({ repeat: -1, yoyo: true }) // Repeat indefinitely
        .to(".kite", {
          y: "-=10",
          x: "+=10",
          rotate: 2,
          duration: 1, // Increase duration for smoother motion
          ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
        })
        .to(".kite", {
          y: "-=9",
          x: "+=8",
          rotate: -2,
          duration: 1, // Increase duration for smoother motion
          ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
        });
    },
    { scope: kiteImg.ref }
  );
  
  const { i18n } = useTranslation();

  
  return (
    <div  className="h-screen max-md:h-auto max-md:py-[150px] overflow-hidden relative flex items-center justify-center">
            {inView && <AudioPlayer src={audioSrc} />} 

      <div className=" max-w-[36%] max-500:max-w-[280px] max-md:max-w-[400px] text-center ">
        <p dir={i18n.dir()} className=" text-[1.20rem] sm:text-[1.3rem] md:text-[1.60rem] lg:text-[1.75rem] dark:text-white mt-4   mb-10">
          {t("EidIdtEXT")}
        </p>
        <button
        ref={ref}
          className="bg-[#8a59c8] dark:bg-[#f5c547] shadow-[-1px_0_25px_-8px_#ffc836] dark:text-[#514f53] dark:hover:bg-[#fff] text-white  hover:bg-[#f5c547] duration-300 ease-in-out text-base md:text-lg font-medium rounded-full py-[10px] px-9"
          type="button"
          dir={i18n.dir()}
        >
          {t("EidIdbutton")}
        </button>
      </div>
      <div
        ref={bluestarImg.ref}
        className="absolute left-[73%] w-[7%] max-480:w-[13%] -rotate-[30deg] top-[21%]"
      >
        <img src={bluestar} alt="blue_star" className="bluestar" />
      </div>
      <div
        ref={kiteImg.ref}
        className="absolute left-[17%]  top-[44%] traslate-y-1/2"
      >
        <img src={kite} alt="kite" className="kite w-[20%]" />
      </div>
      <div ref={blueLineImg.ref} className="absolute -left-96 max-md:w-[94%] max-md:-left-48 max-md:bottom-28 -rotate-[10deg] bottom-0 traslate-y-1/2">
        <img src={blueline} alt="blueline" className=" " />
      </div>
      <div
        ref={bukhorImg.ref}
        className="absolute left-[5%] w-[20%] z-10 max-w-full  top-[25%]"
      >
        <img src={bukhor} alt="bukhor" className=" " />
      </div>
      <div
        ref={somkeImg.ref}
        className="absolute left-[15%] w-[13%] max-375:w-[24%] max-w-full  top-[23%]"
      >
        <img src={smoke} alt="smoke" className=" absolute  z-0 " />
      </div>
    </div>
  );
};
