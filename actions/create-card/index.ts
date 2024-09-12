"use server"

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateCard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const {userId, orgId} = auth();
    if(!userId || !orgId) {
        return {
            error: "Unauthorized"
        };
    };

    const {title, boardId} = data;
    let card;

    try {
       
    } catch (error) {
        return {
            error: "Failed to create"
        }   
    };
    revalidatePath(`/board/${boardId}`)
    return { data: card};

};

export const createCard = createSafeAction(CreateCard, handler);