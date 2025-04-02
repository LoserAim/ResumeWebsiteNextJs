"use client"
import React, {JSX} from "react";
import Layout from "@/_components/layout/Layout";

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: IRootLayout): JSX.Element {
  return (
      <Layout>
          {children}
      </Layout>
  );
}
