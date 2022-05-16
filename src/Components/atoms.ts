import localForage from "localforage";
import { atom, selector } from "recoil";


export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface ICategory {
    text: string;
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoState = atom<ITodo[]>({
    key: "todo",
    default: [],
    effects: [
        ({ setSelf, onSet, trigger }) => {
            const key = "todo"
            // If there's a persisted value - set it on load
            const loadPersisted = async () => {
                const savedValue = await localForage.getItem(key);

                if (savedValue != null) {
                    setSelf(JSON.parse(savedValue as any));
                }
            };

            // Asynchronously set the persisted data
            if (trigger === 'get') {
                loadPersisted();
            }

            // Subscribe to state changes and persist them to localForage
            onSet((newValue, _, isReset) => {
                isReset
                    ? localForage.removeItem(key)
                    : localForage.setItem(key, JSON.stringify(newValue));
            });
        }
    ]
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return [
            toDos.filter((toDo) => toDo.category === category),
        ]
    }
});


export const customCategoriesState = atom<ICategory[]>({
    key: "customCategories",
    default: [{text : Categories.TO_DO}, {text : Categories.DOING}, {text : Categories.DONE}],
    effects: [
        ({ setSelf, onSet, trigger }) => {
            const key = "customCategories"
            // If there's a persisted value - set it on load
            const loadPersisted = async () => {
                const savedValue = await localForage.getItem(key);
                
                if (savedValue != null ) {
                    setSelf(JSON.parse(savedValue as any));
                }
            };

            // Asynchronously set the persisted data
            if (trigger === 'get') {
                loadPersisted();
            }

            // Subscribe to state changes and persist them to localForage
            onSet((newValue, _, isReset) => {
                isReset
                    ? localForage.removeItem(key)
                    : localForage.setItem(key, JSON.stringify(newValue));
            });
        }
    ]
});
