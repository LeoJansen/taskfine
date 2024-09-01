import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface BoardProps {
    title: string;
    id: string;
}

const Board = ({
    title,
    id
} : BoardProps ) => {
    const deleteBoardWithId = deleteBoard.bind(null,id);

    return (
        <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
            <p>Board Title: {title}</p>
            <FormDelete/>
            
        </form>
    )
}

export default Board