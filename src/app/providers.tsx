"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const Providers = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
