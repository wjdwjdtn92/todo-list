import { useForm } from "react-hook-form";
import { useSetRecoilState, } from "recoil";
import { toDoState } from "./atoms";


interface IForm {
    toDo: string;
}


function TodoInput() {
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue} = useForm<IForm>();

    const onValid = ({ toDo }: IForm) => {
        console.log(toDo);
        setToDos(toDos => [...toDos, { text: toDo, id: Date.now(), category: "TO_DO" }])
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(onValid)} >
            <input  {...register("toDo", { required: "Please Write To Do" })} placeholder="Write to do" />
            <button>Add </button>
        </form>
    );
}


export default TodoInput;