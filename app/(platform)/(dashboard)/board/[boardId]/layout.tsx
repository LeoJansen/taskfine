import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const BoardIdLayout = ({
    children
}: {
    children: React.ReactNode,
    params: { boardId: string }
}) => {
    const { orgId } = auth();

    if (!orgId) {
        redirect("/select-org");
    };

    return (
        <div>
            <main className="relative pt-28 h-full">
                {children}
            </main>

        </div>
    )

};

export default BoardIdLayout;