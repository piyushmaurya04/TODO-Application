import TodoItems from "./TodoItems copy";
import { TodoItemsContext } from "../Store/todoItemsStore";
import { useContext } from "react";

const Todoitem = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItem = contextObj.todoitems;
  console.log(todoItem);
  return (
    <>
      {todoItem.map((item) => (
        <TodoItems
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        ></TodoItems>
      ))}
    </>
  );
};

export default Todoitem;
