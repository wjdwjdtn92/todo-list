import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState, } from "recoil";
import { categoryState, toDoState } from "./atoms";


interface IForm {
    toDo: string;
}


function TodoInput() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue} = useForm<IForm>();

    const onValid = ({ toDo }: IForm) => {
        console.log(toDo);
        setToDos(toDos => [...toDos, { text: toDo, id: Date.now(), category: category }])
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