"use client"

import { FormInput } from "@/components/form/form-input";
import { ListWithCards } from "@/types";
import { ElementRef, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";



interface ListHeaderProps {
    data: ListWithCards;
}

export const ListHeader = ({
    data,
}: ListHeaderProps) => {
    const [title, setTitle] = useState(data.title)
    const [isEditing, setIsEditing] = useState(false)

    const formRef = useRef<ElementRef<"form">>(null);
    const inputRef = useRef<ElementRef<"input">>(null);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();

        },);
    };

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            formRef.current?.requestSubmit();
        };
    };

    useEventListener("keydown", onKeyDown);


    return (
        <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
            {isEditing ? (
                <form className="flex-1 px-[2px]">
                    <input hidden id="id" name="id" value={data.id} />
                    <input hidden id="boardId" name="boardId" value={data.boardId} />
                    <FormInput
                        className="bg-transparent text-sm py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate focus:bg-white"
                        ref={inputRef}
                        onBlur={() => { }}
                        id="title"
                        defaultValue={title}
                    />

                </form>

            ) : (
                <div
                    onClick={enableEditing}
                    className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent">
                    {title}
                </div>
            )}
        </div >
    )
}