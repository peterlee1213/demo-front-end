"use client"

import Button, { ButtonProps } from "@mui/material/Button"

export default function PrimaryButton(props: ButtonProps) {

    const { children = null, ...otherProps } = props

    return <Button color="primary" variant="outlined" sx={{
        border: "2px solid",
        textTransform: "none",
        ":hover": {
            border: "2px solid",
        },
        ":active": {
            background: "#D3D1EE"
        }
    }}  {...otherProps}>{children}</Button>
}