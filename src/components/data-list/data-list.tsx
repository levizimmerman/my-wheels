"use client";

import React, { ChangeEvent } from "react";

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
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        className="text-slate-900"
        id={inputId}
        list={listId}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
        disabled={disabled}
      />
      <datalist id={listId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </>
  );
};

export default DataList;
