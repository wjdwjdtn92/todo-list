import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function ToDo({ id, category, text }: ITodo) {
    const setToDos = useSetRecoilState(toDoState);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name},} = event;
        console.log(name);
    }

    return (
        <li key={id}>
            <span>{text}</span>
            { category !== "DOING" && <button name="DOING" onClick={onClick}> Doing</button>}
            { category !== "TO_DO" && <button name="TO_DO" onClick={onClick}> TO DO</button>}
            { category !== "DONE" && <button  name="DONE" onClick={onClick}> DONE</button>}
            
        </li>
    );
}

export default ToDo;