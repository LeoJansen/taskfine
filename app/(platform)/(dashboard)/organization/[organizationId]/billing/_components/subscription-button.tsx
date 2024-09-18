"use client"

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

interface SubscriptionButtonProps {
    isPro: boolean;

}

export const SubscriptionButton = ({
    isPro
}: SubscriptionButtonProps) => {
    const {execute, isLoading} = useAction(stripeRedirect);
    

    return (
       <Button
       variant="default"
       disabled={isLoading}
       >
        {isPro ? "Manage subscription": "Upgrade to Pro"}
       </Button>
    );
};