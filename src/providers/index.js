"use client";

import { ReactQueryProvider } from "./react-query";

export function Providers({ children }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
