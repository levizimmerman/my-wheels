import React from "react";

import formatPrice from "@/src/features/car/utils/format-price";
import Text from "@/src/components/text/text";
import cx from "classnames";

type Props = {
  rate: string;
  selected?: boolean;
};

const CarRate: React.FC<Props> = ({ rate, selected }) => {
  return (
    <div
      className={cx(
        "flex flex-col items-center p-4 rounded-xl",
        !selected && "bg-slate-300 dark:bg-slate-800",
        selected && "bg-indigo-100 dark:bg-indigo-900",
      )}
    >
      <Text bold size="xl">
        {formatPrice(rate)}
      </Text>
      <Text size="sm">per hour</Text>
    </div>
  );
};

export default CarRate;
