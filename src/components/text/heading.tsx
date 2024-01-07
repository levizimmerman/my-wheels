import React from "react";
import Text from "@/src/components/text/text";
import { FontSize } from "@/src/types/theme";

type Props = {
  bold?: boolean;
  children: React.ReactNode;
  renderAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: FontSize;
};

const Heading: React.FC<Props> = ({
  children,
  bold,
  renderAs = "h1",
  size = "2xl",
}) => {
  return (
    <Text renderAs={renderAs} size={size} bold={bold}>
      {children}
    </Text>
  );
};

export default Heading;
