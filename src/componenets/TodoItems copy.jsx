import { useContext } from "react";
import styles from "./TodoItems.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/todoItemsStore";
function TodoItems({ todoName, todoDate }) {
  const contextObj = useContext(TodoItemsContext);
  const OnDelete = contextObj.Deleteitem;

  return (
    <center className={`container ${styles.containerModule}`}>
      <div className={`row row2 ${styles.rowModule} `}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn2 btn-danger ${styles.deleteBtn}`}
            onClick={() => OnDelete(todoName, todoDate)}
          >
            <MdDelete className={styles.DeleteIcon} />
          </button>
        </div>
      </div>
      <hr />
    </center>
  );
}

export default TodoItems;
