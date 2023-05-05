import React from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button5 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full" : "";
  return (
    <div
      className={classNames(
        "min-w-fit h-16 w-48 flex justify-center items-center relative cursor-pointer border-2 border-black",
        "font-serif text-2xl font-semibold duration-1000 before:absolute overflow-hidden",
        "before:left-0 before:top-0 before:-z-10 before:h-full before:w-full",
        "before:rotate-x-90 before:bg-black hover:text-white before:transition",
        "before:duration-1000 before:content-[''] before:hover:rotate-x-0",
        "after:content-[''] after:absolute after:-z-10 after:top-0 after:left-0",
        "after:w-full after:h-full after:rotate-y-90 after:hover:rotate-y-0",
        "after:bg-black after:transition after:duration-1000",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button5;
