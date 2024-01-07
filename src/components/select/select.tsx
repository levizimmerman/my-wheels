import React, { ChangeEvent } from "react";
import Text from "../text/text";

type Props = {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { key: string; value: string }[];
};

const Select: React.FC<Props> = ({ options, label, inputId, onChange }) => {
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={inputId}>
        <Text size="sm" color="muted">
          {label}
        </Text>
      </label>
      <select
        className="bg-slate-500 rounded p-1 text-sm text-white"
        id={inputId}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
