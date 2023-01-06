import type { ReactNode } from "react";
import React from "react";
import classNames from "classnames";

export const Form = ({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <form className={classNames("flex flex-col gap-8", className)} {...rest}>
      {children}
    </form>
  );
};
