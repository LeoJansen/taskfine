"use server"

import { auth, currentUser } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { StripeRedirect } from "./schema";
import { CreateAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { absoluteUrl } from "@/lib/utils";
import { stripe } from "@/lib/stripe";


const handler = async (data: InputType): Promise<ReturnType> => {

    const { userId, orgId } = auth();
    const user = await currentUser();

    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        };
    };
    const settingsUrl = absoluteUrl(`/organization/${orgId}`);
    let url = ""

    try {
        const orgSubscription = await db.orgSubscription.findUnique({
            where: {
                orgId,
            },
        });

        if (orgSubscription && orgSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: orgSubscription.stripeCustomerId,
                return_url: settingsUrl,
            });

            url = stripeSession.url;

        } else {
            const stripeSession = await stripe.checkout.sessions.create({
                success_url: settingsUrl,
                cancel_url: settingsUrl,
                payment_method_types: ["pix", "card"],
                mode: "subscription",
                billing_address_collection: "auto",
                customer_email: user?.emailAddresses[0].emailAddress,
                line_items: [
                    {
                        price_data: {
                            currency: "USD",
                            product_data: {
                                name: "Taskifine Pro",
                                description: "Unilimited boards for your organization."
                            },
                        },
                    },
                ],
            });

          
        }

    } catch (error) {

    }






};

export const stripeRedirect = createSafeAction(StripeRedirect, handler);