"use client"

import { CardWithList } from "@/types";

interface CardItemProps {
    index: number;
    data: CardWithList;
}

export const CardItem = ({
    index,
    data
}: CardItemProps) => {
    return (
        <div>
            Card Item
        </div>
    )
}