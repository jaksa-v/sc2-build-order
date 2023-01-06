import React from "react";
import classNames from "classnames";

export enum Variant {
  Danger = "danger",
  Success = "success",
  Warning = "warning",
  Primary = "primary",
}

export const Badge = ({
  variant,
  text,
}: {
  variant: Variant;
  text: string;
}) => {
  const styles = {
    danger: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    primary: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={classNames(
        "mr-2 rounded px-2.5 py-0.5 text-xs font-medium",
        styles[variant]
      )}
    >
      {text}
    </span>
  );
};
