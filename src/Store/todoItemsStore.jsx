import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

const TodoItemReducer = (currentTotoItem, action) => {
  let newItem = currentTotoItem;
  if (action.type === "NEW_ITEM") {
    newItem = [
      ...currentTotoItem,
      { name: action.value.itemName, date: action.value.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    currentTotoItem.forEach((items) => {
      if (
        items.name == action.value.itemName &&
        items.date == action.value.itemDate
      ) {
        currentTotoItem.pop(items);
      }
      newItem = [...currentTotoItem];
    });
  }
  return newItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchTodoItems] = useReducer(TodoItemReducer, []);

  const AddNewItem = (itemName, itemDate) => {
    const newTodoItem = {
      type: "NEW_ITEM",
      value: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newTodoItem);
  };

  const Deleteitem = (itemName, itemDate) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      value: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoitems,
        AddNewItem,
        Deleteitem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
