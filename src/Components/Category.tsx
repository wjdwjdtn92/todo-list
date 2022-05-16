import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, customCategoriesState, ICategory, toDoState } from "./atoms";

function Category({ text }: ICategory) {
    const setCategories = useSetRecoilState(customCategoriesState);
    const toDos = useRecoilValue(toDoState);

    console.log(text);

    const onRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        setCategories((categories) => {
            if (Object.values(Categories).includes(name as any)) {
                // Do stuff here
                console.log("이거는 기본값이라 삭제 못하게 할거야")
                return [...categories];
            }
            const newCategories = [...categories];

            if (!toDos.some((toDo) => toDo.category === name)) {
                const targetIndex = newCategories.findIndex(category => category.text === name);
                newCategories.splice(targetIndex, 1);
            }

            return newCategories;
        });
    }

    return (
        <li key={text}>
            <span>{text}</span>
            <button name={text} onClick={onRemove}>remove</button>
        </li>
    );
}

export default Category; 