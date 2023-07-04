import HomeClients from "@/components/home/home-clients";
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
    </>
  );
}
