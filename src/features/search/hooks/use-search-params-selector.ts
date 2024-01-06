import { useSearchParams } from "next/navigation";
import { FilterKey } from "../types/filter";

const useSearchParamsSelector = (filterKey: FilterKey) => {
  const searchParams = useSearchParams();
  return searchParams.get(filterKey);
};

export default useSearchParamsSelector;
