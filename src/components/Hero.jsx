import eidmubarak from "../assets/preparationArTxt.9922ff11ba2262c8c8da.png";
import eidmubarakdark from "../assets/preparationArTxtNight.67645e5f9f7d414ec9a6.png";
import eidmubaraken from "../assets/preparationEnTxt.2d96cd86c782a7c44799.png";
import eidmubarakendark from "../assets/preparationEnTxtNight.cd6ca912ad87279915ef.png";
import bluestar from "../assets/shine01.7705d396efb447290480.png";
import jug from "../assets/preparationJug.1698288d79715908e659 (1).png";
import cup from "../assets/preparationCup.6c07522b1da6102d6642.png";
import coffee from "../assets/preparationCupCoffee.da595c0d3459dc820af8.png";
import decoration from "../assets/flag1.a91fb9aca7cfb61a6585.png";
import decorationsmall from "../assets/FlagLine2M.83d6d51bbc19c19bb089.png";
import decoration2 from "../assets/flag.e8c36325290517b3d84b (1).png";
import decoration2small from "../assets/flagM.1f8f01eb952e1f85e0cf.png";
import bread from "../assets/bread.png";
import halfbread from "../assets/BiscuitHalf.99411dabe1cd1477970c.png";
import { useParallax } from "react-scroll-parallax";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; // <-- import GSAP
import { useInView } from "react-intersection-observer";
import AudioPlayer from "./AudioPlayer";
import { useContext, useEffect, useRef, useState } from "react";
import buzz from "buzz";
import mmm from "../assets/eastrenegg.mp3"
import i18n from "../i18n";
import { AudioContext } from "../context/AudioContext";
export const Hero = ({audioSrc , modal}) => {

    const [ref, inView] = useInView(); 
    const { langu} = useContext(AudioContext);

    

    // Create a Buzz.js sound object from the <audio> element
    
    // Function to play the sound
    // useEffect(() => {

    //     const sound = new buzz.sound(mmm);
    //     console.log(modal);
    //         if(modal){

    //             sound.play();
    //         }
    // }, [])
    
    

          
           
       






  gsap.registerPlugin(useGSAP);

  const bluestarImg = useParallax({
    translateY: [100, 0],
  });
  const coffeeCupImg = useParallax({
    translateY: ["-80%", "100%"],
    translateX: ["-80%", "100%"],
    rotate: ["-7deg", "7deg"],
  });
  const jugImg = useParallax({
    translateY: ["5%", "-100%"],
    translateX: ["60%", "-100%"],
    rotate: ["7deg", "20deg"],
  });
  const breadImg = useParallax({
    translateY: ["-50px", "-150px"],
  });
  const haldfBreadImg = useParallax({
    translateY: ["-30px", "-170px"],
  });
  const decorationImg = useParallax({
    translateY: ["0px", "200px"],
  });
  const decoration2Img = useParallax({
    translateY: ["70px", "-100px"],
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".bluestar",
        { scale: 0.6 },
        { scale: 1, duration: 1.5, repeat: -1, yoyo: true }
      );
    },
    { scope: bluestarImg.ref }
  );
  return (
    <div ref={ref} className="  max-md:h-[calc(100vh-8.5rem)] h-[calc(100vh-1.5rem)] w-screen    pt-[10%] relative flex items-center justify-center">
            {inView && <AudioPlayer src={audioSrc} />} 
           
      <div
        ref={bluestarImg.ref}
        className="absolute left-[83%] w-[6%] max-480:w-[14%] top-[21%]"
      >
        <img src={bluestar} alt="blue_star" className="bluestar" />
      </div>
      <div ref={jugImg.ref} className="absolute left-[31%] max-375:w-[42%] max-580:w-[34%] max-[1440px]:left-[28%] max-[1440px]:w-[14%] max-375:left-[10%] max-375:top-[30%] w-[303px] top-[50%] rotate-[7deg] -translate-y-1/2">
        <img src={jug} alt="jug" className="" />
      </div>
      <div ref={coffeeCupImg.ref} className="absolute left-[51%] max-375:w-[42%] w-[14%] max-580:w-[34%] top-[58%] origin-center -rotate-[7deg] -translate-y-1/2">
        <img src={coffee} alt="coffee" className=" absolute" />
        <img src={cup} alt="coffee" className="" />
      </div>
      <div className=" max-375:w-[70%] max-600:w-[60%] w-[25%]">
        {langu === "عربي" ?
        <>
        <img src={eidmubarak} alt="Eid_Mubarak" className="dark:hidden block" />
        <img src={eidmubarakdark} alt="Eid_Mubarak_night" className="dark:block hidden" />
        </>
        :
        <>
    <img src={eidmubaraken} alt="Eid_Mubarak" className="dark:hidden block" />
    <img src={eidmubarakendark} alt="Eid_Mubarak" className="dark:block hidden" />
        </>
}
      </div>
      <div ref={decorationImg.ref} className="absolute right-[0]  w-full  bottom-[-5%]">
        <img
          src={decoration}
          alt="decoration"
          className="w-full hidden md:block"
        />
        <img
          src={decorationsmall}
          alt="decorationsmall"
          className="w-full block md:hidden "
        />
      </div>
      <div ref={breadImg.ref} className="absolute w-[7%] max-480:w-[14%] left-[83%] top-[80%] md:top-[89%]">
        <img src={bread} alt="bread" className="" />
      </div>
      <div ref={haldfBreadImg.ref} className="absolute left-[69%] w-[4%] max-580:w-[10%]  top-[84%] md:top-[89%]">
        <img src={halfbread} alt="bread" className="" />
      </div>
      <div
      ref={decoration2Img.ref}
       className="absolute max-375:top-[115%] w-full max-w-full   top-[90%]"
       >
        <img
          src={decoration2}
          alt="decoration"
          className="w-full hidden md:block"
        />
        <img
          src={decoration2small}
          alt="decoration2small"
          className="w-full block md:hidden "
        />
      </div>
    </div>
  );
};
