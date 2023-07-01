import Link from "next/link";
import HomeHero from "../components/home/home-hero";

export default function Home() {
  return (
    <>
      <HomeHero></HomeHero>
      <section className="home-welcome bg-pixel-black">
        <div className="container mx-auto padding-x py-20 flex-center flex-col md:flex-row">
          <div className="home-welcome-text text-white flex-1">
            <h1>
              We&apos;re <span>turntabl</span>
            </h1>
            <p>
              From our offices in Ghana and London, we build best-in-class
              software for the world&apos;s biggest enterprises.
            </p>
            <p>Let&apos;s disrupt the status quo together...</p>
            <Link href="/contact" className="ml-4 text-white">
              Get in touch &#10230;
            </Link>
          </div>
          <div className="home-welcome-values flex-1"></div>
        </div>
      </section>
    </>
  );
}
