interface BoardProps {
    title: string;
    id: string;
}

const Board = ({
    title,
    id
} : BoardProps ) => {
    return (
        <div >
            Board Title: {title}
        </div>
    )
}

export default Board