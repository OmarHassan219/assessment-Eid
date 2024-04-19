import { EidId, Hero, Takbeer, ThaniEid } from "../components"
import birds from '../assets/birds.mp3'
import takbeer from '../assets/takbeerat.mp3'
import tahni from '../assets/eastrenegg.mp3'
// import Sound from "../components/Sound"
export const Home = ({modal}) => {
  return (
    <>
       <Hero modal={modal} audioSrc={birds}/>
       <EidId />
       <Takbeer audioSrc={takbeer}/>
       <ThaniEid  audioSrc={tahni}/>
    </>
  )
}
