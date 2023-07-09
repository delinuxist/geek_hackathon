import React from "react";
import AnimatePresenceWrapper from "../../components/utils/AnimatePresenceWrapper";
import { Metadata } from "next";
import {
  Hero,
  History,
  Mission,
  Founders,
  OurTeam,
} from "../../components/pages/about";

export const metadata: Metadata = {
  applicationName: "Turntabl Website",
  title: "Turntabl About Page",
  description:
    "We Are Turntabl, Providing Innovative Software Engineering Solutions To Businesses All Over the World",
  publisher: "Turntabl",
  authors: [{ name: "Turntabl" }],
  keywords: [
    "Turntabl",
    "Tech",
    "Solution",
    "Technology",
    "Ghana",
    "Finance",
    "Software",
    "Digital",
    "Africa",
    "About",
  ],
};

export default function About() {
  return (
    <AnimatePresenceWrapper>
      <div className="relative w-full mt-10 bg-software-grey">
        <Hero />
        <Mission />
        <History />
        <Founders />
        <OurTeam />
      </div>
    </AnimatePresenceWrapper>
  );
}
