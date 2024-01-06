import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const useSearchParamsMutation = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const navigateByParams = (params: URLSearchParams) => {
    replace(`${pathname}?${params.toString()}`);
  };

  const deleteParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    navigateByParams(params);
  };

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    navigateByParams(params);
  };

  return React.useMemo(
    () => ({
      deleteParam,
      setParam,
    }),
    [searchParams, pathname, replace],
  );
};

export default useSearchParamsMutation;
