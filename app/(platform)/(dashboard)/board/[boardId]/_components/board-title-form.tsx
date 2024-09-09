"use client"

import { Button } from "@/components/ui/button"
import { Board } from "@prisma/client"

interface BoardTitleFormProps {
    data: Board;
};



export const boardTitleForm = ({
    data
}: BoardTitleFormProps) => {
    return (
        <Button
            className="font-bold text-lg h-auto w-auto p-2 px-2"
        >
            {data.title}
        </Button>
    )
}