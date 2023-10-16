"use client";

import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" suppressHydrationWarning={true}>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
