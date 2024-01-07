"use client";

import React, { ChangeEvent } from "react";
import Text from "../text/text";

type Props = {
  disabled?: boolean;
  inputId: string;
  label: string;
  listId: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  placeholder: string;
  value: string;
};

const DataList: React.FC<Props> = ({
  disabled,
  inputId,
  label,
  listId,
  onChange,
  options,
  placeholder,
  value,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={inputId}>
        <Text color="muted">{label}</Text>
      </label>
      <input
        className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-xl py-2 px-4"
        id={inputId}
        list={listId}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
        value={value}
        disabled={disabled}
      />
      <datalist id={listId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default DataList;
