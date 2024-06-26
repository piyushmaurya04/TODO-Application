import { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../Store/todoItemsStore";
function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const contextObj = useContext(TodoItemsContext);
  const onNewItem = contextObj.AddNewItem;

  const HandleAddBtn = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <center className="container">
      <form className="row row2" onSubmit={HandleAddBtn}>
        <div className="col-6">
          <input
            className={styles.NameInput}
            type="text"
            ref={todoNameElement}
            id="addName"
            placeholder="Enter Todo here"
            required
          />
        </div>
        <div className="col-4">
          <input
            className={styles.DateInput}
            type="date"
            ref={todoDateElement}
            id="addDate"
            required
          />
        </div>
        <div className="col-2">
          <button
            id="addBtn"
            className={`btn btn2 btn-success ${styles.custombtn}`}
          >
            <IoMdAddCircle className={styles.AddIcone} />
          </button>
        </div>
      </form>
    </center>
  );
}

export default AddTodo;
