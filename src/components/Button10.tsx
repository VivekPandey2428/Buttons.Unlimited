import React from "react";
import classNames from "classnames";
import { ButtonType, ButtonProps } from "./Button1";

export enum AnimationTypeHorizontal {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface AnimationProps {
  animationType: AnimationTypeHorizontal;
}

const Button10 = ({
  buttonType = ButtonType.SQUARED,
  animationType = AnimationTypeHorizontal.LEFT,
  className,
  children,
  ...props
}: ButtonProps & AnimationProps) => {
  const buttonTypeStyles =
    buttonType === ButtonType.ROUNDED ? "rounded-full before:rounded-full" : "";
  const animationTypeStyles =
    animationType === AnimationTypeHorizontal.RIGHT
      ? "before:bottom-0 before:right-0"
      : "before:top-0 before:left-0";
  return (
    <div
      className={classNames(
        "relative flex h-16 w-48 items-center justify-center border-4 border-black",
        "text-xl font-semibold before:duration-1000 before:absolute",
        "before:-z-10 before:w-0 before:h-full before:bg-black before:content-[''] before:hover:w-full",
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

export default Button10;
