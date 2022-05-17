import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, customCategoriesState, ICategory, toDoState } from "./atoms";

function Category({ text }: ICategory) {
    const setCategories = useSetRecoilState(customCategoriesState);
    const toDos = useRecoilValue(toDoState);
    const [error, setError] = useState("");

    const onRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        setCategories((categories) => {
            const newCategories = [...categories];

            if (Object.values(Categories).includes(name as any)) {
                // Do stuff here
                console.log("이거는 기본값이라 삭제 못하게 할거야")
                alert("Default Category!!");
                return [...categories];
            } else if (toDos.some((toDo) => toDo.category === name)) {
                // Do stuff here
                console.log("목록부터 삭제해");
                alert(`Please try after deleting the [ ${name} ] category toDo list`);
            } else {
                const targetIndex = newCategories.findIndex(category => category.text === name);
                newCategories.splice(targetIndex, 1);
                setError("");
            }
            return newCategories;
        });
    }

    return (
        <li key={text}>
            <span>{text}</span>
            <button name={text} onClick={onRemove}>remove</button>
            <span style={{ color: 'red'}}>{error}</span>
        </li>
    );
}

export default Category; 