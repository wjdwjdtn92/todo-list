import { useRecoilState, useRecoilValue, } from "recoil";
import { categoryState, customCategoriesState, toDoSelector } from "./atoms";
import CategorySelect from "./CategorySelect";
import Category from "./Category";
import CategoryInput from "./CategoryInput";
import ToDo from "./ToDo";
import TodoInput from "./ToDoInput";


function TodoList() {
    const [toDos] = useRecoilValue(toDoSelector);
    const customCategories = useRecoilValue(customCategoriesState);
    const [category] = useRecoilState(categoryState);

    // console.log(watch());

    return <div>
        <h2>Catogory</h2>
        <CategoryInput />
        <hr />
        <ul>
            {customCategories.map(value => (<Category key={value.text} text={value.text} />))}
        </ul>
        <hr />
        <h2>To Dos</h2>
        <CategorySelect />
        <TodoInput />
        <hr />
        <h2>{category}</h2>
        <ul>
            {toDos.map(toDo => (<ToDo key={toDo.id} {...toDo} />))}
        </ul>
        <hr />
    </div>;
}


export default TodoList;