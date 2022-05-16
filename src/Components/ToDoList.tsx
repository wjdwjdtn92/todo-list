import { useRecoilState, useRecoilValue, } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atoms";
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
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };

    console.log(category);
    // console.log(watch());

    return <div>
        <hr />
        <h2>To Dos</h2>
        <select value={category} onInput={onInput}>
            <option value="TO_DO">To Do</option>
            <option value="DOING">Doing</option>
            <option value="DONE">Done</option>
        </select>
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