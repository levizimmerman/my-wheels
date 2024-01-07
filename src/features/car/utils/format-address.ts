type FormatAddress = {
  city?: string;
  location?: string;
  streetNumber?: string;
};

const formatAddress = ({ city, location, streetNumber }: FormatAddress) => {
  const street = [location, streetNumber].filter(Boolean).join(" ");
  return [street, city].filter(Boolean).join(", ");
};

export default formatAddress;
