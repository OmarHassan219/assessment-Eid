import { HiVolumeUp } from "react-icons/hi";
import { TiVolumeMute } from "react-icons/ti";
import logo from "../assets/EGA_Logo.18f055533874f177ab7c.png";
import light from "../assets/download (2).png";
import dark from "../assets/download (3).png";
import overlay from '../assets/nav-bg.ab1ac9cb33f668303066.png'
import nightoverlay from '../assets/nightOverlay.8d73d967be2b8afb26bf.png'
import buzz from 'buzz'

import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AudioContext } from "../context/AudioContext";
export const Navbar = () => {
  const { pauseAudio, setPauseAudio } = useContext(AudioContext);

const [langu, setlangu] = useState('English')
    const {i18n} = useTranslation()



  

    const [theme, setTheme] = useState(localStorage.getItem("color-theme") ? localStorage.getItem("color-theme") : "light" )
  const handleTheme = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        setTheme("dark")
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light")
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        setTheme("light")
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        setTheme("dark")
        localStorage.setItem("color-theme", "dark");
      }
    }
  };


const handleSound = (status) =>{
    setPauseAudio(status)


}




const handleSelectLanguage = () => {
    console.log(i18n);
    if(langu === "English"){
        setlangu("عربي");
        i18n.changeLanguage("ar");

    }else{
        setlangu("English");
        i18n.changeLanguage("en");

    }
  };








  return (
    <div className=" relative z-10 " dir="ltr">
      <div className="flex  py-3 md:py-5 xl:py-10 items-center dark:bg-[#6c3caf] max-[300px]:px-4 max-[390px]:px-6 px-10 sm:px-16 xl:px-14 z-10  relative justify-between">
        <div className="flex flex-col md:flex-row items-center max-[390px]:gap-1 gap-2 md:gap-5">
          <button
          onClick={() => handleSelectLanguage()}
            type="button"
            className="font-bold bg-[#fff] rounded-full text-[#902cf5] text-[10px] text-sm p-[2px] md:p-[5px] xl:p-[8px] px-4 md:px-5 border border-[#902cf5] "
          >
            {langu}
          </button>
          <button
    
            type="button"
            className="font-bold rounded-full bg-[#fff]  text-[#902cf5] flex items-center justify-between text-sm  py-[1px] md:py-[3px] gap-6 xl:gap-7 px-[1px] md:px-[3px] border border-[#902cf5] "
          >
            <div
              onClick={() => handleSound(true)}
              className={`rounded-full cursor-pointer group ${pauseAudio ? "bg-[#902cf5]" : ""}  p-[2px] md:p-[5px] xl:p-[7px]`}
            >
              <TiVolumeMute
               className={` md:text-sm xl:text-[17px] ${pauseAudio ? "text-[#fff]" : "text-[#c1c1c1] "} `}
              />
            </div>
            <div
              onClick={() => handleSound(false)}
              className={`rounded-full group cursor-pointer ${pauseAudio ? "" : "bg-[#902cf5] "}  p-[2px] md:p-[5px] xl:p-[7px]`}
            >
              <HiVolumeUp
                className={` md:text-sm xl:text-[17px] ${pauseAudio ? "text-[#c1c1c1]" : "text-[#fff] "} `}
              /> 
            </div>
          </button>
        </div>

        <div className="absolute max-[390px]:top-7 top-10 md:top-[45px] xl:top-[65px] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <img src={logo} className=" max-[390px]:w-16  w-[85px] sm:w-[100px] lg:w-32 xl:w-40" alt="logo" />
        </div>

        <button
        type="button"
        onClick={handleTheme}
          className="font-bold rounded-full dark:bg-[#222] shadow-[-1px_0_18px_-5px_#902cf5]  md:shadow-none bg-[#2fb4ee] flex items-center justify-between text-sm py-[2px]  gap-6 md:gap-[17px] px-[3px] "
        >
          <div
            
            className={`rounded-full ${theme === "dark" ? "visible" : "invisible"} cursor-pointer group enabled:bg-[#902cf5] `}
          >
            <img src={dark} alt="darkmode" className=" size-[17px] md:size-[30px]" />
          </div>
          <div
            
            className={`rounded-full ${theme === "light" ? "visible" : "invisible"} cursor-pointer group enabled:bg-[#902cf5] `}
          >
            <img src={light} alt="lightmode" className="size-[17px] md:size-[30px]" />
          </div>
        </button>
      </div>


      <div className="absolute top-11 sm:top-4 lg:top-0 bg-cover z-0">
<img src={overlay} alt="overlay" className="dark:hidden block"/>
<img src={nightoverlay} alt="nightoverlay"  className="dark:block hidden" />
      </div>
    </div>
  );
};
