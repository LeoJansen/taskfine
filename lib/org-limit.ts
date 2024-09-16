import { auth } from "@clerk/nextjs/server";
import { db } from "./db";


export const incrementAvailableCount = async () => {
    const {orgId} = auth();

    if(!orgId) {
       throw new Error("Unauthorized")
    };

    const orgLimit = await db.orgLimit.findUnique({
        where:{orgId}
    });


};

