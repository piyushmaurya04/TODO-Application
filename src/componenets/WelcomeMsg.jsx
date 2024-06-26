import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../Store/todoItemsStore";
const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItem = contextObj.todoitems;
  return (
    todoItem.length === 0 && (
      <p className={styles.welcome}>
        Hello and welcome to TaskMaster,
        <br /> your ultimate productivity companion!
      </p>
    )
  );
};

export default WelcomeMsg;
