"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export default function ProviderReactQuery({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 2 * 5000,
            retry: 2,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
