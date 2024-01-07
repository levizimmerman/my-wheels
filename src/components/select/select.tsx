import React, { ChangeEvent } from "react";
import cx from "classnames";
import Text from "@/src/components/text/text";

type Props = {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { key: string; value: string }[];
  value?: string;
};

const Select: React.FC<Props> = ({
  options,
  label,
  inputId,
  onChange,
  value,
}) => {
  const hasValue = !!value;
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={inputId}>
        <Text size="sm" color="muted">
          {label}
        </Text>
      </label>
      <select
        className={cx(
          "rounded p-1 text-sm dark:text-white text-gray-900",
          !hasValue && "bg-slate-400 dark:bg-slate-500",
          hasValue && "bg-indigo-400 dark:bg-indigo-700",
        )}
        id={inputId}
        onChange={onChange}
        defaultValue={value}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
