"use server"

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateCardOrder } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        };
    };

    const { items, boardId } = data;
    let updatedCards;

    try {
        const transaction = items.map((card) => 
            db.card.update({
                where: {
                    id: card.id,
                    list: {
                        board: {
                            orgId
                        },
                    },
                },
                data: {
                    order: card.order,
                    listId: card.listId
                },
            })
        );                                                                                                                                                                                                                                                                                                  =
        console.log("Before \n")
        console.log(transaction);

        updatedCards = await db.$transaction(transaction);

        console.log("After \n")
        console.log(transaction);
        console.log(updatedCards)



    } catch (error) {
        return {
            error: "Failed to reorder"
        }
    };
    revalidatePath(`/board/${boardId}`)
    return { data: updatedCards };

};

export const updateCardOrder = createSafeAction(UpdateCardOrder, handler);