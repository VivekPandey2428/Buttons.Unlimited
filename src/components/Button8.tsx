import React from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button8 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full before:rounded-full" : "";
  return (
    <div
      className={classNames(
        "relative flex h-16 w-48 items-center justify-center border-4 border-black",
        "text-xl font-semibold text-white before:duration-500 before:absolute before:-left-5",
        "before:-top-5 before:-z-10 before:h-full before:w-full before:bg-black before:content-['']",
        "before:hover:left-0 before:hover:top-0 cursor-pointer",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button8;
