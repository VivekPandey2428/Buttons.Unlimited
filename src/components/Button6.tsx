import React from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button6 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full" : "";
  return (
    <div
      className={classNames(
        "min-w-fit w-48 h-14 font-serif bg-black relative text-white flex justify-center items-center",
        "text-2xl hover:shadow-[0px_0px_10px_0px_#000] cursor-pointer",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button6;
