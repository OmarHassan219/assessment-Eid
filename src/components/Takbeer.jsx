import bluestar from "../assets/shine01.7705d396efb447290480.png"
import takbeer from "../assets/TakbeerARLight.6abbb247e70e91643aff.png"
import takbeernight from "../assets/TakbeerARDark.a9a573bb495474e82440 (1).png"
import takbeernighten from "../assets/TakbeerENDark.cf5fc5b1d3d056560a3b.png"
import takbeernightlight from "../assets/TakbeerENLight.6297cc1e0f17c4408a1a (1).png"
import greenline from "../assets/rideElement04.836127a4e9d1e9c63fa9.png"
import pinkballoon from "../assets/OudPinkBallon.9f7218c3f16278c75f72.png"
import greenballoon from "../assets/OudGreenBallon.3dbb0b434850613a8628.png"
import { useParallax } from "react-scroll-parallax";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; // <-- import GSAP
import { useInView } from "react-intersection-observer"
import AudioPlayer from "./AudioPlayer"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { AudioContext } from "../context/AudioContext"
export const Takbeer = ({audioSrc}) => {
    const [ref, inView] = useInView(); 

    const { langu} = useContext(AudioContext);

    const bluestarImg = useParallax({
        translateY: ["10px", "-10px"],
        rotate: ["-30deg", "-30deg"],
      });
      const takbeerImg = useParallax({
        translateY: ["40%", "-100%"],
        translateX: ["-30%", "0%"],
        rotate: ["40deg" , "40deg"],
      });
      const pinkballoonImg = useParallax({
        translateY: ["40%", "-100%"],
        translateX: ["-30%", "0%"],
      });
      const greenballoonImg = useParallax({
        translateY: ["40%", "-100%"],
        translateX: ["-30%", "0%"],
      });
      const greenLlineImg = useParallax({
        translateY: ["50px", "-50px"],
        translateX: ["30%", "0%"],
      });


    useGSAP(
        () => {
          gsap.fromTo(
            ".bluestar",
            { scale: 0.8 },
            { scale: 1.1, duration: 1.5, repeat: -1, yoyo: true }
          );
        },
        { scope: bluestarImg.ref }
      );





      useGSAP(
        () => {
            pinkballoonImg.current = gsap
            .timeline({ repeat: -1, yoyo: true }) // Repeat indefinitely
            .to(".pinkballoon", {
              y: "-=10",
              x: "+=10",
              rotate: 2,
              duration: 1, // Increase duration for smoother motion
              ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
            })
            .to(".pinkballoon", {
              y: "-=9",
              x: "+=8",
              rotate: -2,
              duration: 1, // Increase duration for smoother motion
              ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
            });
        },
        { scope: pinkballoonImg.ref }
      );

      useGSAP(
        () => {
            greenballoonImg.current = gsap
            .timeline({ repeat: -1, yoyo: true }) // Repeat indefinitely
            .to(".greenballoon", {
              y: "+=15",
              x: "-=15",
              rotate: 5,
              duration: 2, // Increase duration for smoother motion
              ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
            })
            .to(".greenballoon", {
              y: "0",
              x: "-1",
              rotate: 2,
              duration: 1, // Increase duration for smoother motion
              ease: "power1.inOut", // Use power1.inOut for smooth acceleration and deceleration
            });
        },
        { scope: greenballoonImg.ref }
      );
































      const {t , i18n } = useTranslation();




  return (
    <div className=" max-md:h-[calc(100vh-200px)]  h-screen relative flex flex-col gap-32 items-center justify-center">
            {inView && <AudioPlayer src={audioSrc} />} 

      <div className=" max-w-[36%] max-500:max-w-[280px] max-md:max-w-[400px] text-center ">
        <p dir={i18n.dir()} className="text-[1.20rem] sm:text-[1.3rem] md:text-[1.60rem] lg:text-[1.75rem] dark:text-white mt-4   mb-10">
{t("takbeertext")}
        </p>
      </div>
      <div dir={i18n.dir()} className="flex flex-wrap items-center justify-center sm:max-w-full  px-2 gap-1 md:gap-4  max-lg:max-w-[95%]   ">
        <button
          className="bg-[#8a59c8] text-white dark:bg-[#f5c547] shadow-[-1px_0_25px_-8px_#ffc836] dark:text-[#514f53] dark:hover:bg-[#fff] hover:bg-[#f5c547] max-w-[1000px] duration-300 ease-in-out text-[11px] sm:text-sm md:text-base lg:text-lg font-medium rounded-full max-md:w-[48%]  px-2 max-md:py-[10px] py-[12px] "
          type="button"
        >
{t("takbeerbutton4")}
        </button>
        <button
          className="bg-[#8a59c8] text-white dark:bg-[#f5c547] shadow-[-1px_0_25px_-8px_#ffc836] dark:text-[#514f53] dark:hover:bg-[#fff] hover:bg-[#f5c547] duration-300 ease-in-out text-[11px] sm:text-sm md:text-base lg:text-lg font-medium rounded-full max-md:w-[48%] px-2  max-md:py-[10px] py-[12px] "
          type="button"
        >
{t("takbeerbutton3")}
          
        </button>
        <button
          className="bg-[#8a59c8] text-white dark:bg-[#f5c547] shadow-[-1px_0_25px_-8px_#ffc836] dark:text-[#514f53] dark:hover:bg-[#fff]  hover:bg-[#f5c547] duration-300 ease-in-out text-[11px] sm:text-sm md:text-base lg:text-lg font-medium rounded-full max-md:w-[48%] px-2  max-md:py-[10px] py-[12px] "
          type="button"
        >
{t("takbeerbutton2")}
        </button>
        <button
          className="bg-[#8a59c8] text-white dark:bg-[#f5c547] shadow-[-1px_0_25px_-8px_#ffc836] dark:text-[#514f53] dark:hover:bg-[#fff]  hover:bg-[#f5c547] duration-300 ease-in-out text-[11px] sm:text-sm md:text-base lg:text-lg font-medium rounded-full max-md:w-[48%] px-2  max-md:py-[10px] py-[12px]"
          type="button"
        >
{t("takbeerbutton1")}
        </button>
      </div>



      <div ref={bluestarImg.ref} className="absolute left-[40%] max-480:w-[12%] max-md:w-[10%] w-[5%] -rotate-[30deg] top-0">
    <img ref={ref} src={bluestar} alt="blue_star" className="bluestar" />
        </div>
      <div ref={takbeerImg.ref} className="absolute left-[71%] w-[22%] rotate-[40deg] -top-4">
        {langu === "عربي"  ? 
    <>
        <img src={takbeer} alt="takbeer" className="dark:hidden block" />
        <img src={takbeernight} alt="takbeernight" className="dark:block hidden" />
    </> :
          <>
          <img src={takbeernightlight} alt="takbeer" className="dark:hidden block" />
          <img src={takbeernighten} alt="takbeernight" className="dark:block hidden" />
      </>
    }
        </div>
      <div ref={greenLlineImg.ref} className="absolute left-[39%] w-full ">
    <img src={greenline} alt="greenline" className="w-[66%]" />
        </div>
      <div ref={pinkballoonImg.ref} className="absolute left-[10%] max-md:w-[16%] max-480:w-[18%] max-375:w-[22%]  w-[10%] top-[10%]  ">
    <img src={pinkballoon} alt="pinkballoon" className="pinkballoon" />
        </div>
      <div ref={greenballoonImg.ref} className="absolute left-[7%] top-[40%] max-md:w-[14%] max-480:w-[22%] max-375:w-[24%] w-[14%] ">
    <img src={greenballoon} alt="greenballoon" className="greenballoon" />
        </div>

    </div>


  );
};
