"use client";

import { GlobalStyles } from "@/src/styles/GlobalStyles";

export default function GlobalStylesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
