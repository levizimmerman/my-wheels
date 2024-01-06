"use client";

import React, { ChangeEvent } from "react";

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
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="checkbox"
        id={inputId}
        checked={toggled}
        onChange={handleToggle}
      />
    </div>
  );
};

export default Toggle;
