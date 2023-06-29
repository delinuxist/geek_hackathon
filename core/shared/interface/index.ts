import { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: StaticImageData;
  isDisabled?: boolean;
}