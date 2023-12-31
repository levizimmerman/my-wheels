"use client";

import React from "react";
import { FilterKey } from "@/src/features/filters/types/filter";
import FilterSearch from "@/src/features/filters/components/filter-search";

const MODELS = [
  "Golf",
  "C4 Picasso",
  "Model Y",
  "C1-5 Feel",
  "Evalia",
  "Polar",
  "Leaf",
  "Citigo",
  "MEGANE Zen",
  "ZOE",
  "108",
  "C1",
  "CAPTUR Intens",
  "Model 3",
  "Kona",
  "Aiways-model",
  "ZOE Life",
  "Clio",
  "e-Niro",
  "Corsa",
  "ZOE Zen",
  "CITIGOe",
  "C3 Feel",
];

const ModelSearch: React.FC = () => {
  return (
    <FilterSearch
      filterKey={FilterKey.Model}
      inputId="model-search"
      label="Search by model"
      listId="car-models"
      options={MODELS}
      placeholder="e.g. Tesla Model Y"
    />
  );
};

export default ModelSearch;
