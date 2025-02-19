import Image from "next/image";
import "./globals.css";
import MasonryGallery from "./components/MasonryGallery";
import TrackingTimeline from "./components/TrackingTimeline";
import ProgressBar from "./components/ProgressBar";
import CardsBasedUI from "./components/CardsBasedUI";
export default function Home() {
  return (
   <div>
    
   {/* <MasonryGallery />  */}
   <ProgressBar /> 
    {/* <TrackingTimeline /> */}
    {/* <CardsBasedUI /> */}
    
   </div>
  );
}
