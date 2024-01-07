import React from "react";
import Text from "@/src/components/text/text";

type Props = {
  brand?: string;
  model?: string;
};

const CarName: React.FC<Props> = ({ brand, model }) => {
  const name = [brand, model].filter(Boolean).join(" - ");
  return (
    <Text color="muted" renderAs="h2">
      {name ?? "No name"}
    </Text>
  );
};

export default CarName;
