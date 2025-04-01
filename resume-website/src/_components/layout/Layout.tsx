import React, {JSX} from "react";
import Sidebar from "@/_components/layout/Sidebar";

interface IRootLayout {
    children: React.ReactNode;
}

export default function Layout({
                                   children,
                               }: IRootLayout): JSX.Element {
    return (
        <html lang="en">
            <body>
                <Sidebar>
                    {children}
                </Sidebar>
            </body>
        </html>
    );
}
