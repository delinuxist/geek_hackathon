"use client";

import {
  fidelityLogo,
  finosLogo,
  msLogo,
  secondStaxLogo,
  userIconImg,
} from "../../public/assets/img";
import Image from "next/image";
import { Swiper } from "swiper";

// Import Swiper styles
import { clientReview } from "../../core/shared/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css/bundle";
import { useEffect, useState } from "react";

export default function HomeClients() {
  const [swiper, setSwiper] = useState<Swiper>(null);
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    setSwiper(swiper);
  }, []);
  return (
    <section className="home-client bg-inspiration padding-x py-7">
      <div className="home-client-list container mx-auto grid gap-y-10 max-[600px]:gap-x-5 max-[1016px]:grid-cols-2 grid-cols-4 grid-rows-1 items-center">
        <Image
          className="h-fit justify-self-center"
          src={finosLogo}
          alt="Finos Logo"
          width={190}
        />
        <Image
          className="h-fit justify-self-center"
          src={fidelityLogo}
          alt="Finos Logo"
          width={190}
        />
        <Image
          className="h-fit justify-self-center"
          src={msLogo}
          alt="Finos Logo"
          width={190}
        />
        <Image
          className="h-fit justify-self-center"
          src={secondStaxLogo}
          alt="Finos Logo"
          width={190}
        />
      </div>
      <div className="home-client-reviews py-20 flex-center justify-between container padding-x mx-auto gap-10">
        <div className="home-client-reviews-text self-start">
          <h3 className="leading-none">What our clients say about us</h3>
          <p className="text-white py-5">
            Here it straight from our clients. Real stories, real results.
          </p>
        </div>
        <div className="home-client-reviews-carousel max-w-[750px] w-full h-[250px]">
          <div className="swiper relative">
            <div className="swiper-wrapper">
              {clientReview.map((review, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <p className="font-medium text-[32px]">
                      <q>{review.review}</q>
                    </p>
                    <div className="py-5 flex items-center">
                      <Image
                        src={userIconImg}
                        width={52}
                        height={52}
                        className="rounded-full bg-white p-2 inline-block "
                        alt="Client image or default icon"
                      />
                      <div className="ml-3">
                        <p className="font-medium">{review.name}</p>
                        <p className="text-[12px] font-medium">
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-10 right-10 z-40">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={() => swiper.slidePrev()}
              />
            </div>
            <div className="absolute bottom-10 right-2 z-40">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                onClick={() => swiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
