"use client"


import { Card } from "@prisma/client";

interface CardItemProps {
    index: number;
    data: Card;
}

export const CardItem = ({
    index,
    data
}: CardItemProps) => {
    return (
        <div className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md">
           {data.title}
        </div>
    )
}