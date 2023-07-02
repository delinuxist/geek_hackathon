import {
  fidelityLogo,
  finosLogo,
  msLogo,
  secondStaxLogo,
} from "../../public/assets/img";
import Image from "next/image";

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
      <div className="home-client-reviews py-20 ">
        <div className="home-client-reviews-text"></div>
        <div className="home-client-reviews-carousel"></div>
      </div>
    </section>
  );
}
