import HomeBlog from "@/components/home/home-blog";
import HomeClients from "@/components/home/home-clients";
import HomeContact from "@/components/home/home-contact";
import HomeFaq from "@/components/home/home-faq";
import HomeWelcome from "@/components/home/home-welcome";
import HomeHero from "../components/home/home-hero";

export default function Home() {
  return (
    <>
      <HomeHero></HomeHero>
      <HomeWelcome></HomeWelcome>
      <HomeClients></HomeClients>
      <HomeFaq></HomeFaq>
      <HomeContact></HomeContact>
      <HomeBlog></HomeBlog>
    </>
  );
}
