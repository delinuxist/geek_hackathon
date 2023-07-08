"use client";
import InputField from "@/components/forms/input-field";
import InputLabel from "@/components/forms/input-label";
import TextArea from "@/components/forms/text-area";
import CustomButton from "@/components/utils/CustomButton";

export default function FormSection() {
  const styles = {
    ttContactFormRowItem:
      "flex flex-col flex-grow flex-shrink basis-[350px] self-stretch m-1 p-1 xl:p-3 xl:m-2",
    ttContactPageRowItem:
      "flex flex-col flex-grow flex-shrink self-stretch m-3 p-1",
  };

  return (
    <div className={`rounded-3xl`}>
      <div className="justify-between items-center flex flex-col p-3">
        <div className="flex flex-row justify-center items-center flex-wrap">
          <div className={styles.ttContactFormRowItem}>
            <InputLabel label="Name: " />
            <InputField placeholder="Enter your Name" />
          </div>
          <div className={styles.ttContactFormRowItem}>
            <InputLabel label="Email: " />
            <InputField placeholder="Enter your Email" />
          </div>

          <div className={styles.ttContactFormRowItem}>
            <InputLabel label="Company: " />
            <InputField placeholder="Enter your Company Name" />
          </div>
          <div className={styles.ttContactFormRowItem}>
            <InputLabel label="Role Within Company: " />
            <InputField placeholder="Enter your role" />
          </div>
          <div className={`${styles.ttContactFormRowItem} ${"basis-[500px]"}`}>
            <InputLabel label="Tell us More: " />
            <TextArea placeholder="Tell us a little about you, your organisation or your project" />
          </div>
        </div>
        <CustomButton
          title="Let's Chat"
          buttonType="submit"
          containerStyles="bg-insightful rounded-md hover:bg-inspiration"
        />
      </div>
    </div>
  );
}
