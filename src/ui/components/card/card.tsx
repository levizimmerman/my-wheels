import React from "react";

type Props = {
  children: React.ReactNode;
  renderAs?: "div" | "section" | "article";
};

const Card: React.FC<Props> = ({ children, renderAs: Component = "div" }) => {
  return (
    <Component className="shadow-lg rounded bg-white dark:bg-slate-800">
      {children}
    </Component>
  );
};

export default Card;
