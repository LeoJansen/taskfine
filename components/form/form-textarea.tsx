"use client"

import { forwardRef, KeyboardEventHandler } from "react";

interface FormTextareaProps {
    id: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    onBlur?: () => void;
    onClick?: () => void;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    defaultValue?: string;
};


export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(({
    id,
    label,
    placeholder,
    required,
    disabled,
    errors,
    className,
    onBlur,
    onClick,
    onKeyDown,
    defaultValue
} : FormTextareaProps) => {

    return (
        <div className="space-y-2 w-full"> 
        {label ? (
            <Label
            htmlFor={id}
            className="text-xs font-semibold text-neutral-700"
            >

            </Label>

        ) : null}

        </div>
    )
})

FormTextarea.displayName = "FormTextarea"