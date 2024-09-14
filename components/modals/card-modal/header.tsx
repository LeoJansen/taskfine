"use client";

import { FormInput } from "@/components/form/form-input";
import { CardWithList } from "@/types";
import {  Layout } from "lucide-react";
import { useRef, useState } from "react";

interface HeaderProps {
    data: CardWithList;
};

export const Header = ({
    data
}: HeaderProps) => {
    const inputRef = useRef()
    const [title, setTitle] = useState(data?.title);


    return (
        <div className="flex items-center gap-x-3 mb-6 w-full">
             <Layout className="h-5 w-5 mt-1 text-neutral-700"/>
             <div className="w-full">
                <FormInput
                id="title"
                ref={inputRef}
                defaultValue={title}
                />

             </div>
        </div>
    );
};