import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: StaticImageData;
  isDisabled?: boolean;
}

export interface HistoryCardProps {
  title: string;
  icon: string;
  date: string;
  iconBg: string;
  story: string;
}

export interface FoundersCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
  links: {
    title: string;
    url: string;
  }[];
}
