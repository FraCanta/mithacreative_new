import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function CtaLight({ children, link }) {
  return (
    <Link
      href={link}
      title="progetto"
      className="max-w-max w-full border text-purple border-purple dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-regular"
    >
      {children}
      <Icon
        icon="guidance:left-arrow"
        className="text-xl text-purple dark:text-purple"
      />
    </Link>
  );
}

export default CtaLight;
