import React, {JSX} from "react";

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: IRootLayout): JSX.Element {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
