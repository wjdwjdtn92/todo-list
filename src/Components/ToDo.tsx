import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function ToDo({ id, category, text }: ITodo) {
    const setToDos = useSetRecoilState(toDoState);

    console.log(id);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name},} = event;
        console.log(name);
        setToDos((toDos)=> {
            const newToDos = [...toDos];
            const targetIndex = newToDos.findIndex(toDo => toDo.id === id)
            newToDos[targetIndex]= {text, id, category: name as any};

            return newToDos;
        });
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