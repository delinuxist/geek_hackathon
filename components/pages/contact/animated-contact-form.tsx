import Lottie from "lottie-react";
import animationData from "@/public/assets/json/contact-us.json";
import Contact from "@/app/contact/page";
import FormSection from "./form-section";

export default function AnimatedContactFormSection() {
  return (
    <div className="padding-x flex flex-col ">
      <div className="content-center justify-center py-5">
        <div>
          <h1 className="text-center md:text-7xl xl:text-9xl">Contact Us</h1>
        </div>
        <p className="text-center md:text-lg">
          Talking is free, and who knows what we might achieve together. <br />{" "}
          Contact us now for an obligation free chat!
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-1/3 max-w-2xl hidden md:contents">
          <Lottie animationData={animationData} className="" />
        </div>
        <div className="items-center  flex">
          <FormSection />
        </div>
      </div>
    </div>
  );
}
