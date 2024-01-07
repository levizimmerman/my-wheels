import React, { ChangeEvent } from "react";
import cx from "classnames";
import Text from "@/src/components/text/text";

type Props = {
  inputId: string;
  label: string;
  onToggle: (toggled: boolean) => void;
  toggled: boolean;
};

const Toggle: React.FC<Props> = ({ inputId, label, onToggle, toggled }) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <div
      className={cx([
        "inline-block py-1 px-3 rounded relative",
        !toggled && "bg-slate-400 dark:bg-slate-500 dark:active:bg-slate-700",
        toggled && "bg-indigo-400 dark:bg-indigo-700",
      ])}
    >
      <label className="flex items-center gap-1" htmlFor={inputId}>
        {toggled && <Text size="sm">✓</Text>}
        <Text size="sm">{label}</Text>
      </label>
      <input
        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
        type="checkbox"
        id={inputId}
        checked={toggled}
        onChange={handleToggle}
      />
    </div>
  );
};

export default Toggle;
