import React, { ComponentProps } from "react";
import classNames from "classnames";

interface StyledColor {
    borderColor?: string,
}

const Button13 = ({
  borderColor,
  className,
  children,
  ...props
}: StyledColor & ComponentProps<"div">) => {
    
  return (
    <div
      className={classNames(
        "group relative flex h-16 w-48 items-center justify-center text-xl font-semibold before:absolute",
        "before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:transition-all",
        "before:delay-300 before:duration-1000 before:content-[''] after:absolute after:bottom-0 after:right-0",
        "after:-z-10 after:h-full after:w-0 after:transition-all after:delay-300 after:duration-1000",
        "after:content-[''] hover:text-white before:hover:w-full after:hover:w-full before:bg-black after:bg-black",
        className
      )}
      {...props}
    >
      <span className={classNames("ease absolute left-0 top-0 h-0 w-0 border-t-2 transition-all duration-200 group-hover:w-full", borderColor)}></span>
      <span className={classNames("ease absolute bottom-0 right-0 h-0 w-0 border-b-2 transition-all duration-200 group-hover:w-full", borderColor)}></span>
      <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
        {children}
      </span>
    </div>
  );
};

export default Button13;
