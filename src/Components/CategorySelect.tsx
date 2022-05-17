import { useRecoilState, useRecoilValue, } from "recoil";
import { categoryState, customCategoriesState } from "./atoms";


function CategorySelect() {
    const customCategories = useRecoilValue(customCategoriesState);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };


    return <div>
        <select value={category} onInput={onInput}>
            {customCategories.map(categories => (<option value={categories.text}>{categories.text}</option>))}
        </select>
    </div>;
}


export default CategorySelect;