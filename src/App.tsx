
import { createGlobalStyle } from "styled-components"
import TodoList from "./Components/ToDoList";

const GlobalStyle = createGlobalStyle`
  
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
