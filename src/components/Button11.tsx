import React from "react";
import classNames from "classnames";
import {ButtonType, ButtonProps} from "./Button1";

const Button10 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles =
    buttonType === ButtonType.ROUNDED ? "rounded-full before:rounded-full" : "";
  return (
    <div
      className={classNames(
        "relative flex h-16 w-48 items-center justify-center border-4 border-black",
        "text-xl font-semibold before:absolute before:left-0 before:top-0 before:-z-10",
        "before:h-full before:w-0 before:bg-black before:transition-all before:duration-1000",
        "before:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-10 after:h-full",
        "after:w-0 after:bg-black after:transition-all after:duration-1000 cursor-pointer after:content-[''] hover:text-white before:hover:w-full after:hover:w-full",
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
