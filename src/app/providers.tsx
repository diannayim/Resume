"use client";

import { ChakraProvider, Switch } from "@chakra-ui/react";

import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return <ChakraProvider>{children}</ChakraProvider>;
}
