import thingreenline from "../assets/thingreenline.png"
import thinblueline from "../assets/thinblueline.png"
import giftbox from "../assets/GiftContainer.021292d382905b880cbb.png"
import gifttop from "../assets/GiftTop.89e441526fae2b99eccb.png"
import fands from "../assets/F&S.a90f71c610b64a2be7b3.png"
import lady from "../assets/Lady.abfb20da12b83805b6b1.png"
import girl from "../assets/Daughter.c6801fbef1a4f83cc0a7.png"
import redline from "../assets/redline.png"
import redlinedark from "../assets/familyWaveDark1.de9d2a4b06a8b1e77e87.png"
import greenMoney from "../assets/W_01.042cbd1772af70a99957.png"
import pinkmoney from "../assets/W_03.5c4092a11cc9cc80e3f4.png"
import bluemoney from "../assets/W_02.20f91fa4ebb0f671c7e6.png"
import envelope from "../assets/W_04.52333a4e24be0bf75474.png"
import { useParallax } from "react-scroll-parallax"
import { useInView } from "react-intersection-observer"
import AudioPlayer from "./AudioPlayer"
import { useTranslation } from "react-i18next"


export const ThaniEid = ({audioSrc}) => {
    const [ref, inView] = useInView(); 

    const blueLlineImg = useParallax({
        translateY: ["0%", "-50%"],
        translateX: ["-30%", "0%"],
      });
    const greenLlineImg = useParallax({
        translateY: ["0%", "-50%"],
        translateX: ["-30%", "0%"],
      });
      const giftBoxImg = useParallax({
          translateY: ["-5%", "10%"],
          rotate: ["0deg", "-5deg"],
        });



        const giftTopImg = useParallax({
            translateY: ["10%", "-60%"],
            translateX: ["0%", "10%"],
          rotate: ["0deg", "5deg"],

          });
        const greenMoneyBigImg = useParallax({
            translateY: ["50px", "-50px"],
          });
        const PinkMoneyBigImg = useParallax({
            translateY: ["120px", "-120px"],
          });
        const PinkMoneySmallImg = useParallax({
            translateX: ["-36px", "-70px"],
          });
        const greenMoneySmallImg = useParallax({
            translateY: ["0%", "-50%"],
            translateX: ["40px", "50px"],
            rotate: ["-21deg", "-21deg"],
          });
        const blueMoneySmallImg = useParallax({
            translateX: ["70px", "100px"],
            rotate: ["212deg", "212deg"],
          });
        const fandsImg = useParallax({
            translateY: ["10%", "5%"],
          });
        const ladyImg = useParallax({
            translateY: ["20px", "-20px"],
            translateX: ["4%", "0%"],
          });
        const girlImg = useParallax({
            translateX: ["10%", "0%"],
          });










          const { t , i18n } = useTranslation();





  return (
    <div className="h-screen relative  flex flex-col gap-32 items-center justify-center">
            {inView && <AudioPlayer src={audioSrc} />} 

      <div className=" max-w-[36%] max-500:max-w-[280px] max-md:max-w-[400px] text-center">
        <p 
        dir={i18n.dir()}
        ref={ref} className="text-[1.20rem] dark:text-white sm:text-[1.3rem] md:text-[1.60rem] lg:text-[1.75rem]  mt-4   mb-10 ">
{t("thanitext")}
        </p>
      </div>
     


      <div ref={greenLlineImg.ref} className="absolute left-[-10%] max-480:w-[130%] max-md:w-[140%] max-md:-left-[60%] w-[56%] -top-7">
    <img src={thingreenline} alt="thingreenline" className="" />
        </div>
      <div ref={blueLlineImg.ref} className="absolute left-[-10%] max-480:w-[80%] max-md:w-[85%] max-md:-left-[60%] w-[40%] -top-11">
    <img src={thinblueline} alt="thinblueline" className="" />
        </div>
      <div className="absolute left-[75%] w-[12%] max-480:w-[14%] max-375:w-[16%] rotate-[20deg] top-[13%]">
    <img ref={giftTopImg.ref} src={gifttop} alt="gifttop" className="rotate-6 relative -translate-y-4" />
    <img ref={giftBoxImg.ref} src={giftbox} alt="giftbox" className="" />
        </div>

        <div>

      <div ref={greenMoneySmallImg.ref} className="absolute left-[70%]  z-10 -rotate-[21deg] translate-x-10 scale-x-[-1] top-[65%]     w-[4%] max-md:w-[5%] max-480:w-[9%] max-375:w-[9%] max-375:left-[58%] max-375:top-[45%]">
    <img src={greenMoney} alt="greenMoney" className=" " />
   
        </div>
      <div ref={blueMoneySmallImg.ref} className="absolute left-[70%] z-10 rotate-[212deg] translate-x-[70px] -translate-y-5   top-[65%]    w-[4%] max-md:w-[5%] max-480:w-[9%] max-375:w-[9%] max-375:left-[58%] max-375:top-[45%]">
    <img src={bluemoney} alt="bluemoney" className=" " />
   
        </div>
      <div ref={PinkMoneySmallImg.ref} className="absolute left-[70%] z-10 -translate-x-9 translate-y-3  top-[65%]      max-480:w-[10%]   max-375:w-[10%]   w-[6%] max-md:w-[7%] max-375:left-[78%] max-375:top-[44%]">
    <img src={pinkmoney} alt="pinkmoney" className=" " />
   
        </div>
      
      <div className="absolute left-[70%] z-0 -rotate-6 top-[65%]          max-375:top-[45%]  w-[10%] max-md:w-[18%]  max-375:w-[22%]">
    <img src={envelope} alt="envelope" className="  -translate-y-4" />
   
        </div>
        </div>


        <div ref={greenMoneyBigImg.ref} className="absolute left-[4%] w-[6%] top-[20%] ">

<img src={greenMoney} alt="greenMoney" className=" " />
    </div>
        <div ref={PinkMoneyBigImg.ref} className="absolute left-[18%] w-[8%] top-[39%] ">

<img  src={pinkmoney} alt="pinkmoney" className=" " />
    </div>



        <div>

      <div className="absolute left-[4%] bottom-[12%] w-[18%] max-480:w-[32%] max-375:w-[37%] z-10">

    <img ref={fandsImg.ref} src={fands} alt="fands" className=" " />
        </div>
      <div ref={ladyImg.ref} className="absolute left-[16%] max-375:left-[27%]  z-[2] bottom-[12%]  w-[23%] max-md:w-[23%] max-480:w-[38%] max-375:w-[46%] ">

      <img src={lady} alt="lady" className="" />

        </div>
      <div ref={girlImg.ref} className="absolute left-[9.5%]  z-[11] bottom-[12%] w-[20%] max-md:w-[20%] max-480:w-[32%] max-375:w-[38%]  ">

      <img src={girl} alt="girl" className="" />

        </div>
      <div className="absolute left-[0]  z-[11] bottom-[6%] md:bottom-[3%]  max-480:w-[75%] ">

      <img src={redline} alt="redline" className="dark:hidden block" />
      <img src={redlinedark} alt="redlinedark" className="dark:block hidden" />

        </div>
  
        </div>
      

    </div>


  );
};
