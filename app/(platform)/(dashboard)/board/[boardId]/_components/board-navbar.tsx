import { db } from "@/lib/db";

interface BoardNavbarProps {
    id: string;
    orgId: string;
}

export const BoardNavbar = async ({
    id,
    orgId
}: BoardNavbarProps) => {

    const board = await db.board.findUnique({
        where: {
            id: id,
            orgId,
        }
    });

    return (
        <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center">
            BoardNavbar
        </div>
    )
}

