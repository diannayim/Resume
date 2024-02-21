"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ResumeSidebar from "./components/ResumeSidebar";
import Providers from "./providers";
import { Grid, GridItem } from "@chakra-ui/react";
import { Page } from "./constants/pages";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [page, setPage] = useState(Page.HOME);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Grid
            templateAreas={'"nav main"'}
            gridTemplateColumns="270px 1fr"
            gap={1}
          >
            <GridItem
              area="nav"
              sx={{
                position: "fixed",
                display: "flex",
                height: "100vh",
                top: 0,
                bottom: 0,
                zIndex: 10000,
              }}
            >
              <ResumeSidebar />
            </GridItem>
            <GridItem area="main">{children}</GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
