import Link from "next/link";
import InputField from "../forms/input-field";
import InputLabel from "../forms/input-label";
import CustomButton from "../utils/CustomButton";

export default function HomeContact() {
  return (
    <section className="home-contact container mx-auto padding-x max-[700px]:p-0 bg-white py-14">
      <div className="bg-pixel-black container mx-auto flex-center max-[1016px]:flex-col">
        <div className="home-contact-text flex-1 self-stretch py-16 px-14 max-[1016px]:px-8">
          <h2 className="text-white max-[1016px]:leading-none max-[1016px]:text-[45px]">
            Innovative Software Engineering Solutions To Businesses All Over The
            World.
          </h2>
          <p className="font-medium text-white">
            Revolutionising business through cutting-edge software engineering
            solutions worldwide.
          </p>
        </div>
        <div className="home-contact-form flex-1 py-16 px-14 max-[600px]:px-8">
          <h5 className="text-white">Send inquiry</h5>
          <p className="text-white py-3">
            Contact us now for an obligation free chat! Email us via{" "}
            <span className="underline">
              <a href="mailto:info@turntabl.io">info@turntabl.io</a>
            </span>
          </p>
          <form action="#" className="text-white text-center">
            <div className="form-group">
              <InputLabel scheme="dark" label="Name: " />
              <InputField scheme="dark" placeholder="Your name" />
            </div>
            <div className="form-group">
              <InputLabel scheme="dark" label="Email: " />
              <InputField scheme="dark" placeholder="user@example.com" />
            </div>
            <div className="form-group">
              <InputLabel scheme="dark" label="Message: " />
              <InputField scheme="dark" placeholder="Message" />
            </div>
            <CustomButton
              title="About Us"
              buttonType="submit"
              containerStyles="bg-insightful rounded-full text-pixel-black hover:bg-inspiration w-full"
            ></CustomButton>
            <Link
              href="/contact"
              className="text-white text-center mt-3 inline-block"
            >
              Get in touch with us &#10230;
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
