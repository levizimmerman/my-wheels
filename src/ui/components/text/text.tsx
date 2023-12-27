import React from "react";
import cx from "classnames";
import { FontSize, TextColor } from "@/src/core/models/theme";

type Props = {
  children: React.ReactNode;
  color?: TextColor;
  renderAs?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: FontSize;
};

const fontSizes: Record<FontSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const colors: Record<TextColor, string> = {
  base: "text-gray-900 dark:text-slate-100",
};

const Text: React.FC<Props> = ({
  children,
  color = "base",
  renderAs: Component = "span",
  size = "base",
}) => {
  return (
    <Component className={cx(fontSizes[size], colors[color])}>
      {children}
    </Component>
  );
};

export default Text;
