"use client";

import React, { ChangeEvent } from "react";
import { FilterKey } from "../types/filter";
import Select from "@/src/components/select/select";
import useSearchParamsMutation from "../hooks/use-search-params-mutation";

type Props = {
  filterKey: FilterKey;
  label: string;
  options: { key: string; value: string }[];
};

const FilterSelect: React.FC<Props> = ({ filterKey, options, label }) => {
  const { setParam, deleteParam } = useSearchParamsMutation();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setParam(filterKey, event.target.value);
    } else {
      deleteParam(filterKey);
    }
  };

  return (
    <Select
      inputId={filterKey}
      options={options}
      label={label}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
