import { useRecoilValue, } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
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
    const toDos = useRecoilValue(toDoState);
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    console.log(toDos);
    // console.log(watch());

    return <div>
        <TodoInput />
        <h2>To Do</h2>
        <ul>
            {toDo.map(toDo => (
                <ToDo {...toDo}/>
            ))}
        </ul>
        <h2>Doing</h2>
        <ul>
            {doing.map(toDo => (
                <ToDo {...toDo}/>
            ))}
        </ul>
        <h2>Done</h2>
        <ul>
            {done.map(toDo => (
                <ToDo {...toDo}/>
            ))}
        </ul>
    </div>;
}


export default TodoList;