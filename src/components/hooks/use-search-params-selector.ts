import { useSearchParams } from "next/navigation";

const useSearchParamsSelector = (key: string) => {
  const searchParams = useSearchParams();
  return searchParams.get(key);
};

export default useSearchParamsSelector;
