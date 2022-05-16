import { useRecoilState, useRecoilValue, } from "recoil";
import { categoryState, customCategoriesState, toDoSelector } from "./atoms";
import CatagorySelect from "./CatagorySelect";
import Category from "./Category";
import CategoryInput from "./CategoryInput";
import ToDo from "./ToDo";
import TodoInput from "./ToDoInput";

// function TodoList() {
//     const [toDo, setToDo] = useState("");
//     const onChange = (envet:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value},
//         } = envet;
//         setToDo(value);
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//     }

//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={toDo} placeholder="Write to do" />
//             <button>Add</button>
//         </form>
//     </div>;
// }


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
        <CatagorySelect />
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