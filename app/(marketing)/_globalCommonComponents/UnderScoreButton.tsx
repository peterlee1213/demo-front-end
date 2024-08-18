"use client"

import { ReactNode } from "react";

export type UnderScoreButtonProps = {
    children?: ReactNode
    onClick?: () => void
}


export default function UnderScoreButton(props: UnderScoreButtonProps) {
    const { children = null, onClick = () => null } = props ?? {};
    return (
        <span
            className="group text-[#1976d2] font-bold select-none cursor-pointer hover:text-[#0865C1] "
            onClick={() => onClick()}
        >
            <span className="group-hover:border-b-[#0865C1] group-hover:border-b-2">{children}</span> &gt;
        </span>
    );
}