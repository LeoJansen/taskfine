import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { title } from "process";
import { BoardNavbar } from "./_components/board-navbar";
import { Loader2 } from "lucide-react";

export async function generateMetadata({
    params
}: {
    params: { boardId: string };
}) {
    const {orgId} = auth();
    

    if(!orgId) {
        return{
            title: "Board"
        }
    };

    const board = await db.board.findUnique({
        where: {
            id: params.boardId,
            orgId,
        }
    });

    return{
        title: board?.title || "Board"
    }

}
;
const BoardIdLayout = async ({
    children,
    params
}: {
    children: React.ReactNode,
    params: { boardId: string }
}) => {
    const { orgId } = auth();
 

    if (!orgId) {
        redirect("/select-org");
    };
    setTimeout(() => {
        
    }, 10000);

    const board = await db.board.findUnique({
        where: {
            id: params.boardId,
            orgId,
        }
    });

    if (!orgId) {
        notFound();
    };
    if(!board) {
        return (
            <div className="p-6 flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
        </div>
        )
    }
    

    return (
        <div className="relative h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${board?.imageFullUrl})` }}
        >
            <BoardNavbar data={board} />
            <div className="absolute inset-0 bg-black/40"/>
            <main className="relative pt-28 h-full">
                {children}
            </main>

        </div>
    )

};

export default BoardIdLayout;