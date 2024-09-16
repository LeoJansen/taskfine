import { auth } from "@clerk/nextjs/server";
import { db } from "./db";


export const incrementAvailableCount = async () => {
    const {orgId} = auth();

    if(!orgId) {
        return;
    };

    const orgLimit = await db.orgLimit.findUnique({
        where:{orgId}
    });


};

