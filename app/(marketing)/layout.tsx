"use client"

import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Props {
    readonly children: ReactNode;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#0A0C10"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
})

export default function RootLayout({ children }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <div>{children}</div>
        </ThemeProvider>

    );
}
