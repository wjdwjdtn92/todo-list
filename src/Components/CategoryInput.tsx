import { useForm } from "react-hook-form";
import { useSetRecoilState, } from "recoil";
import { customCategoriesState } from "./atoms";


interface IForm {
    category: string;
}


function CategoryInput() {
    const setCustomCategories = useSetRecoilState(customCategoriesState);
    // const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();

    const onValid = ({ category }: IForm) => {
        setCustomCategories(customCategories => {
            console.log(customCategories);

            return customCategories
                .some(value =>
                    value.text === category
                ) ? [...customCategories] :  [...customCategories, { text: category }];
        });

        setValue("category", "");
    };

    return (
        <form onSubmit={handleSubmit(onValid)} >
            <input  {...register("category", { required: "Please Write category" })} placeholder="Write to do" />
            <button >Add </button>
        </form>
    );
}


export default CategoryInput;