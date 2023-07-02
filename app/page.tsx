import ValueCard from "@/components/home/value-card";
import Link from "next/link";
import HomeHero from "../components/home/home-hero";
import { values } from "../core/shared/constants/index";

export default function Home() {
  return (
    <>
      <HomeHero></HomeHero>
      <section className="home-welcome bg-pixel-black">
        <div className="container mx-auto padding-x py-20 flex-center flex-col md:flex-row">
          <div className="home-welcome-text text-white flex-1 self-start">
            <div className="w-[410px] mx-auto">
              <h1 className="text-[96px] font-neuebit leading-9">
                We&apos;re <span className="text-disruption">turntabl</span>
              </h1>
              <p className="my-5 mt-12">
                From our offices in Ghana and London, we build best-in-class
                software for the world&apos;s biggest enterprises.
              </p>
              <p className="my-5 text-disruption">
                Let&apos;s disrupt the status quo together...
              </p>
              <Link href="/contact" className="text-white">
                Get in touch with us &#10230;
              </Link>
            </div>
          </div>
          <div className="home-welcome-values flex-1 text-white">
            <div className="grid grid-cols-2 grid-rows-2 w-[657px] gap-y-5">
              {values.map((value) => ValueCard(value))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
