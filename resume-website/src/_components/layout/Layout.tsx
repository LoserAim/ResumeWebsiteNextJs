"use client"
import React, {JSX} from "react";
import Sidebar from "@/_components/layout/Sidebar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

interface IRootLayout {
    children: React.ReactNode;
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export default function Layout({
                                   children,
                               }: IRootLayout): JSX.Element {
    return (
        <html lang="en">
            <body>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Sidebar>
                    {children}
                </Sidebar>
            </ThemeProvider>
            </body>
        </html>
    );
}
