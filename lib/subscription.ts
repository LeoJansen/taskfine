import { auth } from "@clerk/nextjs/server";
import { db } from "./db";




const DAY_IN_MS = 84_400_000;


export const checkSubscription = async () => {
    const{orgId} = auth();

    if(!orgId) {
        return false;
    };

    const orgSubscription = await db.orgSubscription.findUnique({
        
    })

}