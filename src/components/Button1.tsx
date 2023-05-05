import React, {ComponentProps} from 'react';
import classNames from "classnames";

export enum ButtonType {
  ROUNDED = "ROUNDED",
  SQUARED = "SQUARED"
}
export interface ButtonProps extends ComponentProps<"div">{
  buttonType?: ButtonType,
}

const Button1 = ({
  buttonType = ButtonType.SQUARED,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonTypeStyles = buttonType === ButtonType.ROUNDED ? "rounded-full" : "";
  return (
    <div
      className={classNames(
        "min-w-fit text-2xl w-40 h-12 bg-black text-white flex justify-center items-center cursor-pointer",
        buttonTypeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button1;
