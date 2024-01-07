import { useSearchParams } from "next/navigation";

const useSearchParamsAnySelector = (keys: string[]) => {
  const searchParams = useSearchParams();
  return Array.from(searchParams).some(([key]) => keys.includes(key));
};

export default useSearchParamsAnySelector;
