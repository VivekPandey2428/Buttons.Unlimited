import React, {ComponentProps} from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button4 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full" : "";
  return (
    <div
      className={classNames(
        "min-w-fit before: relative w-48 h-16 flex justify-center items-center cursor-pointer overflow-hidden",
        "border-2 border-black font-serif text-2xl font-semibold delay-150 before:absolute before:left-0 before:top-0",
        "before:-z-10 before:h-full before:w-full before:origin-bottom-left before:-rotate-90 before:bg-black hover:text-white",
        "before:transition before:content-[''] before:hover:rotate-0",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button4;
