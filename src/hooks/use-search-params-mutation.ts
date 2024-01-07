import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const useSearchParamsMutation = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const navigateByParams = (params: URLSearchParams) => {
    push(`${pathname}?${params.toString()}`);
  };

  const deleteParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    navigateByParams(params);
  };

  const deleteParams = (keys: string[]) => {
    const params = new URLSearchParams(searchParams);
    keys.forEach((key) => params.delete(key));
    navigateByParams(params);
  };

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    navigateByParams(params);
  };

  return React.useMemo(
    () => ({
      deleteParams,
      deleteParam,
      setParam,
    }),
    [searchParams, pathname, push],
  );
};

export default useSearchParamsMutation;
