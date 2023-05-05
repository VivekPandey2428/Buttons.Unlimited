import React from "react";
import classNames from "classnames";
import { ButtonType, ButtonProps } from "./Button1";

export enum AnimationTypeVertical {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

interface AnimationProps {
  animationType: AnimationTypeVertical;
}

const Button9 = ({
  buttonType = ButtonType.SQUARED,
  animationType = AnimationTypeVertical.TOP,
  className,
  children,
  ...props
}: ButtonProps & AnimationProps) => {
  const buttonTypeStyles =
    buttonType === ButtonType.ROUNDED ? "rounded-full before:rounded-full" : "";
  const animationTypeStyles =
    animationType === AnimationTypeVertical.BOTTOM
      ? "before:bottom-0 before:left-0"
      : "before:top-0 before:left-0";
  return (
    <div
      className={classNames(
        "relative flex h-16 w-48 items-center justify-center border-4 border-black",
        "text-xl font-semibold before:duration-1000 before:absolute",
        "before:-z-10 before:w-full before:h-0 before:bg-black before:content-[''] before:hover:h-full",
        "hover:text-white before:transition-all cursor-pointer",
        animationTypeStyles,
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button9;
