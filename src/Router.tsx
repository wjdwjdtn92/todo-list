
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./Components/ToDoList";

function Router() {
    return (<BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<TodoList />} />
        </Routes>
    </BrowserRouter>)
}

export default Router;