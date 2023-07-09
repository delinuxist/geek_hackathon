"use client";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "@/public/assets/json/contact-us.json";
import FormSection from "./form-section";
import { useRef } from "react";


export default function AnimatedContactFormSection() {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  return (
    <div className="padding-x flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-7xl">
             <div className="content-center justify-center  py-5">
        <div>
          <h1 className="text-center md:text-6xl lg:text-7xl xl:text-8xl">Contact Us</h1>
        </div>
        <p className="text-center md:text-md">
          Talking is free, and who knows what we might achieve together. <br />{" "}
          Contact us now for an obligation free chat!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/3 max-w-5xl flex justify-center">
          <Lottie 
          onMouseEnter={()=> {
            lottieRef.current?.setSpeed(3)
          }}
          onMouseLeave={()=> {
            lottieRef.current?.setSpeed(1)
          }}
          lottieRef={lottieRef}
          animationData={animationData} 
          className="w-1/4 lg:w-full" />
        </div>
        <div className="items-center flex">
          <FormSection />
        </div>
      </div>
      </div>
 
    </div>
  );
}
