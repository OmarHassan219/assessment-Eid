import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import { useTranslation } from "react-i18next";

export const SoundModal = ({setModal}) => {
  const {setPauseAudio } = useContext(AudioContext);
  const { t, i18n } = useTranslation();

  return (
    <div  onClick={() => {
    setPauseAudio(false)
        setModal(false)}} className='fixed bg-[#0009] w-full h-full z-20 flex items-center justify-center'>
<div
        dir={i18n.dir()}
className="dark:bg-[#fff]  bg-[#6c3caf] rounded-[20px]  sadow-[0_4px_8px_#0003] flex flex-col items-center max-w-[400px] p-[1rem]">
<p className="text-sm mb-6 text-center font-medium dark:text-[#6c3caf] text-white "
>
    {t("modaltext")}
    </p>
<button onClick={() => {
    setPauseAudio(false)
    setModal(false)}} type="button" className="bg-[#f7c73f]  py-1 px-2 text-[black] rounded-full uppercase hover:bg-[#ccac00] duration-300 text-sm  ease-in-out ">    {t("modalbutton")}
    </button>
</div>
    </div>
  )
}
