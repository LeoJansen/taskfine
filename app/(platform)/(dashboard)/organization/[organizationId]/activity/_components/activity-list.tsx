import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ActivityListProps {
    data: any;
}

export const ActivityList = async ({
    data
}: ActivityListProps) => {
    const { orgId } = auth();

    if (!orgId) {
        redirect("/select-org")
    };

    const auditLogs = await db.auditLog.findMany({
        where: {
            orgId,
        },
    });




    return (
        <ol className="space-y-4 mt-4">
            <p className="hidden last:block text-sm text-center text-muted-foreground">
                No activity found inside this organization
            </p>
            {auditLogs.map}

        </ol>
    );
};