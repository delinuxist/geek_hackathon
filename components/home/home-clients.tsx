"use client";

import {
  fidelityLogo,
  finosLogo,
  msLogo,
  secondStaxLogo,
} from "../../public/assets/img";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeClients() {
  return (
    <section className="home-client bg-inspiration padding-x py-7">
      <div className="home-client-list grid gap-y-10 max-[600px]:gap-x-5 max-[1016px]:grid-cols-2 grid-cols-4 grid-rows-1 items-center">
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
      <div className="home-client-reviews py-20 flex-center gap-10">
        <div className="home-client-reviews-text self-start">
          <h3>What our clients say about us</h3>
          <p>Here it straight from our clients. Real stories, real results.</p>
        </div>
        <div className="home-client-reviews-carousel max-w-[700px] w-full">
          <Slider
            speed={500}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <div className="bg-red">
              <p>1</p>
            </div>
            <div className="bg-red">
              <p>2</p>
            </div>
            <div className="bg-red">
              <p>3</p>
            </div>
            <div className="bg-red">
              <p>4</p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
