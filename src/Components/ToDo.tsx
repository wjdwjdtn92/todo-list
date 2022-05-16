import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "./atoms";

function ToDo({ id, category, text }: ITodo) {
    const setToDos = useSetRecoilState(toDoState);

    console.log(id);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        console.log(name);
        setToDos((toDos) => {
            const newToDos = [...toDos];
            const targetIndex = newToDos.findIndex(toDo => toDo.id === id)
            newToDos[targetIndex] = { text, id, category: name as any };

            return newToDos;
        });
    }

    const onRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        console.log(name);
        setToDos((toDos) => {
            const newToDos = [...toDos];
            const targetIndex = newToDos.findIndex(toDo => toDo.id === id);
            newToDos.splice(targetIndex, 1);

            return newToDos;
        });
    }

    return (
        <li key={id}>
            <span>{text}</span>
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}> Doing</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}> TO DO</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}> DONE</button>}
            <button onClick={onRemove}>remove</button>
        </li>
    );
}

export default ToDo; 