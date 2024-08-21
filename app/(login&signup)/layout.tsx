import type { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}



export default function RootLayout({ children }: Props) {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            {children}
        </div>
    );
}
