import AnimatedContactFormSection from "@/components/pages/contact/animated-contact-form";
import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";

export default function Contact() {
  return (
    <>
    <AnimatePresenceWrapper>
      <AnimatedContactFormSection />
    </AnimatePresenceWrapper>
    </>
  );
}
