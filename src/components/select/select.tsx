import React, { ChangeEvent } from "react";

type Props = {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { key: string; value: string }[];
};

const Select: React.FC<Props> = ({ options, label, inputId, onChange }) => {
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <select id={inputId} className="bg-slate-700" onChange={onChange}>
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
