import React from "react";

// React-Query imports
import { devEnvironment } from "../utils/env";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const ReactQuery = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* {["development", "test"].includes(devEnvironment) && (
        <ReactQueryDevtools />
      )} */}
    </QueryClientProvider>
  );
};

export default ReactQuery;
