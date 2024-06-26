import AppName from "./componenets/Appname";
import AddTodo from "./componenets/AddTodo";
import Todoitem from "./componenets/todoItemFile";
import "./App.css";
import WelcomeMsg from "./componenets/WelcomeMsg";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./Store/todoItemsStore";

function App() {
  document.body.style.backgroundColor = "#1b4f72 ";
  return (
    <TodoItemsContextProvider>
      <center className="container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <Todoitem></Todoitem>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
