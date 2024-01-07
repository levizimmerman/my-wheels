import Heading from "@/src/components/text/heading";
import Text from "@/src/components/text/text";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const Header: React.FC<Props> = ({ description, title }) => {
  return (
    <header className="bg-gray-100 dark:bg-slate-800 px-8 py-4 flex items-center gap-4 shadow-lg z-10">
      <Heading size="xl" bold>
        {title}
      </Heading>
      <Text size="xs" color="muted">
        {description}
      </Text>
    </header>
  );
};

export default Header;
