import React, {ComponentProps} from 'react';
import classNames from "classnames";
import {ButtonType, ButtonProps} from './Button1';

const Button3 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full" : "";
  return (
    <div
      className={classNames(
        "min-w-fit text-xl w-40 h-12 border-2 border-black bg-white hover:bg-black hover:text-white text-black flex justify-center items-center cursor-pointer",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button3;
