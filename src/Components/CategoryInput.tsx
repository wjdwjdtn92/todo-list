import { useForm } from "react-hook-form";
import { useSetRecoilState, } from "recoil";
import { customCategoriesState } from "./atoms";


interface IForm {
    category: string;
}


function CategoryInput() {
    const setCustomCategories = useSetRecoilState(customCategoriesState);
    // const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue, setError , formState: { errors }  } = useForm<IForm>();

    const onValid = ({ category }: IForm) => {
        setCustomCategories(customCategories => {
            console.log(customCategories);
            const isDuplicate = customCategories.some(value => value.text === category)

            if (isDuplicate) {
                setError("category", { message: "Duplicate category" });
            }
            return isDuplicate ? [...customCategories] : [...customCategories, { text: category }];
        });

        setValue("category", "");
    };

    return (
        <form onSubmit={handleSubmit(onValid)} >
            <input  {...register("category", { required: "Please Write category" })} placeholder="Write to category" />
            <button >Add </button>
            <span  style={{ color: 'red'}}>{errors?.category?.message}</span>
            
        </form>
    );
}


export default CategoryInput;