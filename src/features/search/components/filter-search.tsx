"use client";

import React, { ChangeEvent, FormEvent } from "react";
import DataList from "@/src/components/data-list/data-list";
import useSearchParamsMutation from "../hooks/use-search-params-mutation";
import { FilterKey } from "../types/filter";
import getSearchParamValue from "../utils/get-search-param-value";

type Props = {
  filterKey: FilterKey;
  inputId: string;
  label: string;
  listId: string;
  options: string[];
  placeholder: string;
};

const FilterSearch: React.FC<Props> = ({
  filterKey,
  options,
  inputId,
  label,
  listId,
  placeholder,
}) => {
  const [query, setQuery] = React.useState(
    () => getSearchParamValue(filterKey) ?? "",
  );
  const { deleteParam, setParam } = useSearchParamsMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query) {
      setParam(filterKey, query);
    } else {
      deleteParam(filterKey);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DataList
        inputId={inputId}
        label={label}
        listId={listId}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        value={query}
      />
    </form>
  );
};

export default FilterSearch;
