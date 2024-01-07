import React from "react";

import formatAddress from "../utils/format-address";
import Heading from "@/src/components/text/heading";

type Props = {
  city?: string;
  location?: string;
  streetNumber?: string;
};

const CarAddress: React.FC<Props> = ({ city, location, streetNumber }) => {
  return (
    <address className="not-italic">
      <Heading renderAs="h2" size="lg">
        {formatAddress({ city, location, streetNumber })}
      </Heading>
    </address>
  );
};

export default CarAddress;
