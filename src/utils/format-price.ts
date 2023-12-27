const formatPrice = (value: number | string) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  return Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export default formatPrice;
