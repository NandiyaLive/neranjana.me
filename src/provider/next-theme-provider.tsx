"use client";

import { ThemeProvider } from "next-themes";
import { ReactQueryProvider } from "./react-query-provider";

export const NextThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};
