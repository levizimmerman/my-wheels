"use client";

import Toggle from "@/src/components/toggle/toggle";
import React from "react";
import { FilterKey } from "../types/filter";
import useSearchParamsMutation from "@/src/hooks/use-search-params-mutation";
import useSearchParamsSelector from "@/src/hooks/use-search-params-selector";

type Props = {
  filterKey: FilterKey;
  label: string;
};

const FilterToggle: React.FC<Props> = ({ filterKey, label }) => {
  const toggled = useSearchParamsSelector(filterKey) === "true";
  const { deleteParam, setParam } = useSearchParamsMutation();

  const handleToggle = () => {
    if (toggled) {
      deleteParam(filterKey);
    } else {
      setParam(filterKey, "true");
    }
  };

  return (
    <Toggle
      label={label}
      toggled={toggled}
      onToggle={handleToggle}
      inputId={filterKey}
    />
  );
};

export default FilterToggle;
