"use server"

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { StripeRedirect } from "./schema";
import { CreateAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { absoluteUrl } from "@/lib/utils";


const handler = async (data: InputType): Promise<ReturnType> => {

    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        };
    };
    const settingsUrl = absoluteUrl(`/organization/${orgId}`);
    let url = ""

    try {
        const orgSubscription = await db.
        
    } catch (error) {
        
    }






};

export const stripeRedirect = createSafeAction(StripeRedirect, handler);