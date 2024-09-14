"use client";

import { CardWithList } from "@/types";
import { Layout } from "lucide-react";

interface HeaderProps {
    data: CardWithList;
};

export const Header = ({
    data
}: HeaderProps) => {
    return (
        <div className="flex items-center gap-x-3 mb-6 w-full">
             <Layout className="h-5 w-5 mt-1 text-neutral-700"/>
        </div>
    );
};