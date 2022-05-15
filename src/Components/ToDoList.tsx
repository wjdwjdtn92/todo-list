import { useRecoilValue, } from "recoil";
import { toDoState } from "./atoms";
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

    console.log(toDos);
    // console.log(watch());

    return <div>
        <TodoInput />
        <ul>
            {toDos.map(toDo => (
                <ToDo {...toDo}/>
            ))}
        </ul>
    </div>;
}


export default TodoList;