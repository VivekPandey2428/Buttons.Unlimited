import React from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button7 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full before:rounded-full" : "";
  return (
    <div
      className={classNames(
        "relative flex h-16 w-48 skew-y-6 cursor-pointer items-center justify-center bg-black",
        "font-serif font-semibold text-white before:absolute before:-z-10",
        "before:h-full before:w-full before:skew-x-12 before:bg-gray-400 before:transition-all before:duration-1000",
        "before:content-[''] hover:bg-gray-400 before:hover:bg-black",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button7;
