"use client";

import React from "react";
import Toggle from "../../../components/toggle/toggle";
import FilterToggle from "./filter-toggle";
import { FilterKey, FuelType } from "../types/filter";
import FilterSelect from "./filter-select";

type Props = {};

const Filters: React.FC<Props> = ({}) => {
  return (
    <>
      <FilterToggle filterKey={FilterKey.Availability} label="Only Available" />
      <FilterToggle filterKey={FilterKey.TowBar} label="Towbar" />
      <FilterToggle filterKey={FilterKey.WinterTires} label="Winter tires" />
      <FilterSelect
        filterKey={FilterKey.FuelType}
        label="Fuel type"
        options={[
          {
            // Leave empty to delete the filter
            key: "",
            value: "No preference",
          },
          {
            key: FuelType.Electric,
            value: "Electric",
          },
          {
            key: FuelType.Gasoline,
            value: "Gasoline",
          },
        ]}
      />
    </>
  );
};

export default Filters;
