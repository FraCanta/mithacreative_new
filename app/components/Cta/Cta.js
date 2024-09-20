import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Cta({ children, link }) {
  return (
    <Link
      href={link}
      title="progetto"
      className="max-w-max border border-primary dark:border-white rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-regular"
    >
      {children}
      <Icon
        icon="guidance:left-arrow"
        className="text-xl text-primary dark:text-white"
      />
    </Link>
  );
}

export default Cta;
