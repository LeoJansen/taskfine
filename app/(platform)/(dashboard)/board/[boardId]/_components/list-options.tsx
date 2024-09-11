"use client"

import { ListWithCards } from "@/types";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverClose
} from "@/components/ui/popover";
import { } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, X } from "lucide-react";
import { FormSubmit } from "@/components/form/form-button";
import { Separator } from "@/components/ui/separator";


interface ListOptionsProps {
    data: ListWithCards;
    onAddCard: () => void;
};


export const ListOptions = ({
    onAddCard,
    data
}: ListOptionsProps) => {


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="h-auto w-auto p-2" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    List Actions
                </div>
                <PopoverClose asChild>
                    <Button className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600" variant="ghost">
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <Button onClick={onAddCard} className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm" variant="ghost">
                    Add Card
                </Button>
                <form>
                    <input hidden name="id" id="id" value={data.id} />
                    <input hidden name="boardId" id="boardId" value={data.boardId} />
                    <FormSubmit
                        className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                        variant="ghost"
                    >
                        Copy List
                    </FormSubmit>
                </form>
                <Separator/>
                <form>
                    <input hidden name="id" id="id" value={data.id} />
                    <input hidden name="boardId" id="boardId" value={data.boardId} />
                    <FormSubmit
                        className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                        variant="ghost"
                    >
                        Delete this list
                    </FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    )
}


