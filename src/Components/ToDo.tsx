import { useRecoilValue, useSetRecoilState } from "recoil";
import { customCategoriesState, ITodo, toDoState } from "./atoms";

function ToDo({ id, category, text }: ITodo) {
    const setToDos = useSetRecoilState(toDoState);
    const customCategories = useRecoilValue(customCategoriesState);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
    
        setToDos((toDos) => {
            const newToDos = [...toDos];
            const targetIndex = newToDos.findIndex(toDo => toDo.id === id)
            newToDos[targetIndex] = { text, id, category: name as any };

            return newToDos;
        });
    }
    const onRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            {customCategories.map(categories =>
                <button name={categories.text} onClick={onClick}> {categories.text} </button>
            )}
            <button onClick={onRemove}>remove</button>
        </li>
    );
}

export default ToDo; 