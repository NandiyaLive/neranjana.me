import { NextThemeProvider } from "./next-theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextThemeProvider>{children}</NextThemeProvider>;
};
