"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "default" |"destructive" | "outline" | "secondary" | "ghost" | "link" ;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export const FormSubmit = ({
    children,
    disabled,
    className,
    variant = "default",
    size = "default"
} : FormSubmitProps) => {
    const {pending} = useFormStatus();

    return (
        <Button
        disabled={pending || disabled}
        className={className}
        variant={variant}
        type="submit"
        size={size}
        >
            {children}
        </Button>

    )

}