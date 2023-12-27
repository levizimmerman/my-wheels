import React from "react";
import Text from "@/src/ui/components/text/text";

type Props = {
  renderAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ children, renderAs = "h1" }) => {
  return (
    <Text renderAs={renderAs} size="2xl">
      {children}
    </Text>
  );
};

export default Heading;
