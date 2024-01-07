import React from "react";
import cx from "classnames";

type Props = {
  children: React.ReactNode;
  renderAs?: "div" | "section" | "article";
  backgroundColor?: "base" | "selected";
  backgroundColorHover?: "base" | "selection";
};

const Card: React.FC<Props> = ({
  children,
  renderAs: Component = "div",
  backgroundColor = "base",
  backgroundColorHover,
}) => {
  return (
    <Component
      className={cx(
        "shadow-sm rounded-xl",
        backgroundColor === "base" && "bg-slate-100 dark:bg-slate-900",
        backgroundColor === "selected" && "bg-indigo-200 dark:bg-indigo-800",
        backgroundColorHover === "base" &&
          "hover:bg-slate-100 hover:dark:bg-slate-700",
        backgroundColorHover === "selection" &&
          "hover:bg-indigo-100 hover:dark:bg-indigo-600",
      )}
    >
      {children}
    </Component>
  );
};

export default Card;
