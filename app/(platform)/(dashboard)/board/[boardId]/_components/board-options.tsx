"use client"


import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "@radix-ui/react-popover";
import { MoreHorizontal, X } from "lucide-react";
import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";

interface BoardOptionsProps {
    id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
    const { execute, isLoading } = useAction(deleteBoard, {
        onError: (error) => {
            toast.error(error)
        },
    });


    const onDelete = () => {
        execute({ id });

    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="h-auto w-auto p-2" variant="transparent">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="px-4 pt-3 pb-3 bg-neutral-100 border border-neutral-500 rounded-md"
                side="bottom"
                align="start"
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4 mr-8">
                    Board Actions
                </div>
                <PopoverClose asChild>
                    <Button
                        variant="ghost"
                        className="absolute right-2 top-2 h-auto w-auto p-2 text-neutral-600"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <Button
                    variant="ghost"
                    onClick={onDelete}
                    disabled={isLoading}
                    className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm text-neutral-600"
                >
                    Delete this board
                </Button>
            </PopoverContent>

        </Popover>
    )

}