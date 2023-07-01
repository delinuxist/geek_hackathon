import Image from "next/image";
import Link from "next/link";
import { homeHeroIllustration } from "../public/assets/img";
import CustomButton from "@/components/utils/CustomButton";

export default function Home() {
  return (
    <>
      <section className="home-hero flex-center h-[668px] bg-center p-3">
        <div className="home-hero-text flex-1 flex-center flex-col">
          <h1 className="text-white text-[96px]">
            <span className="font-neuebit font-bold leading-none">
              The Next
            </span>
            <span className="font-normal leading-none ml-14">Rev¤lution</span>
            <span className="font-neuebit font-bold leading-5">
              in Software
            </span>
            <span className="font-normal ml-14">Engineering</span>
          </h1>
          <div className="home-hero-button-row flex-center">
            <CustomButton
              title="About Us"
              buttonType="button"
              containerStyles="bg-insightful rounded-full hover:bg-inspiration w-40"
            ></CustomButton>
            <Link href="/contact">Get in touch with us</Link>
          </div>
        </div>
        <div className="home-hero-image flex-1">
          <Image src={homeHeroIllustration} alt="Home hero image" />
        </div>
      </section>
    </>
  );
}
