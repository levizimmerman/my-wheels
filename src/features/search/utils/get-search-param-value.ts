const getSearchParamValue = (key: string) => {
  const searchParams = new URLSearchParams(document.location.href);
  return searchParams.get(key);
};

export default getSearchParamValue;
