"use server"

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateCardOrder } from "./schema";
import { CreateAuditLog } from "@/lib/create-audit-log";
import { list } from "postcss";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        };
    };

    const { items, boardId } = data;
    let updatedCards;
    const listId = items[0].listId

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
        );
        const list = await db.list.findUnique({
            where: {
                id: listId,     
                boardId,
            }
        })

        updatedCards = await db.$transaction(transaction);

        if(list){
            await CreateAuditLog({
                entityTitle: list.title,
                entityId: list.id,
                entityType: ENTITY_TYPE.LIST,
                action: ACTION.UPDATE,
            });
        }

     



    } catch (error) {
        return {
            error: "Failed to reorder"
        }
    };
    revalidatePath(`/board/${boardId}`)
    return { data: updatedCards };

};

export const updateCardOrder = createSafeAction(UpdateCardOrder, handler);